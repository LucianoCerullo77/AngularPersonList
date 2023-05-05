import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

Injectable({providedIn: 'root'})

// export class LoginGuardian implements CanActivate {
//   constructor(private loginService: LoginService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (this.loginService.isAuthenticated()) {
//       return true;
//     } else {
//       this.router.navigate(['login']);
//       return false;
//     }
//   }
// }

export class LoginGuardian {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivateLogin() {
    if (this.loginService.getIdToken() != '') {
      console.log('true');
      return true;
    } else {
      console.log('false');
      this.router.navigate(['login']);
      return false;
    }
  }
}
