import { Injectable } from '@angular/core';
import { NavigationStart, Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  message = '';
  messageType = '';

  user: any;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      // start of route change clear messsage
      if (event instanceof NavigationStart) {
        this.message= '';
      }
    });
  }
  // display error message
  error(message) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message) {
    this.messageType = 'success';
    this.message = message;
  }

  warning(message) {
    this.messageType = 'warning';
    this.message = message;
  }

}
