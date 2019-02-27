import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm = '';
  // mobile view
  isCollpased = true;

  get token() {
    return localStorage.getItem('token');
  }

  // control mobile view is collapsed
  collapse() {
    this.isCollpased = true;
  }

  closeDropdown(dropdown){
    dropdown.close();
  }

  logout() {}

  search() {}

}
