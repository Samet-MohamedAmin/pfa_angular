import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate() {
    if(this.auth.isLoggedIn() && this.auth.getUserDetails().role == "personal")
      return true;

    this.router.navigate(['/home']);
    return false;
  }
}
