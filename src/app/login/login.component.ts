import { Router } from '@angular/router';
import { RestApiService } from './../services/rest-api.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  btnDisabled = false;

  constructor(private router: Router, private rest: RestApiService, 
              private data: DataService) { }

  ngOnInit() {
  }

  validate(){
    if(this.email){
      if(this.password){
        return true;
      }else{
        this.data.error('Password is not entered');
      }
    }else{
      this.data.error('Email is not entered');
    }
  }

  async login() {
    this.btnDisabled = true;
    try {
      // validate the data
      if (this.validate()) {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/login', {
            email: this.email,
            password: this.password
          }
        );
        // if successful
        if (data['success']) {
          localStorage.setItem('token', data['token']);
          this.router.navigate(['/']);
        } else {
          // error displayed
          this.data.error(data['message']);
        }
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
