import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRoute,
  RouterStateSnapshot,
  Router,
  ActivatedRouteSnapshot
} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }
  
  // check if the user is currently logged in
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (localStorage.getItem('token')) {
      // will redirect to homePage
      this.router.navigate(['/']);
      return false;
    }else {
      return true;
    }
  }

}
