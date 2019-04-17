import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  userDetails:any;
  @Output() menuClicked = new EventEmitter();
  
  constructor(private auth: AuthenticationService) {
    this.auth.userEmitter
      .subscribe((userDetails) => {
        this.isLoggedIn = userDetails != null ? true : false;
        this.userDetails = userDetails;
      })
    this.auth.updateUserState();
  }

  ngOnInit() {
  }

  /**
   * user logout.
   * trigger authentication service logout and reloads the page.
   */
  logout(){
    this.auth.logout();
    location.reload();
  }

}
