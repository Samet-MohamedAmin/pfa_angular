import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ROLES, ROLE_LIST } from '../login-service.service';
import { MatSelectChange } from '@angular/material';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { CredentialsSignInInterface } from './credentials-sign-in';

/**
 * sign-in component
 */
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  roles = ROLES;
  roleList = ROLE_LIST;
  role: string;
  credentials: CredentialsSignInInterface = { email: '', password: '', type: '' };
  formFieldAppearance = 'outline';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private auth: AuthenticationService) { }


  ngOnInit() {
    console.log('in sign-in component');
    this.role = this.route.snapshot.params.role;
    this.route.params.subscribe((params: Params) => {
      const roleParam = params.role.toLowerCase();
      if (this.roleList.includes(roleParam)) {
        this.role = roleParam;
        //set the type 
        if (this.role == 'student') this.credentials.type = this.role;
        else if (this.role == 'admin') this.credentials.type = "personal";
      }
      else {
        this.router.navigate(['/error'])
      }
    }
    );

    // TODO: scroll to top page
    // window.scroll(0, 0);
  }

  /**
   * triggered when professional role changed
   * @param eventData contains the selected professional role value
   */
  professionalRoleSelectionChanged(eventData: MatSelectChange) {
    console.log(eventData.value);
    this.credentials.type = eventData.value
  }



  login() {
    console.log('login')
    console.log(this.credentials)
    this.auth.login(this.credentials).subscribe((data) => {
      this.auth.updateUserState()
      this.router.navigateByUrl('/home')
    }, (err) => {
      console.error(err);
    });
  }

  





}
