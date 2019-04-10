import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ROLES, ROLE_LIST } from '../login-service.service';
import { MatSelectChange } from '@angular/material';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { CredentialsSignInInterface } from './credentials-sign-in';

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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private auth: AuthenticationService) { }


  ngOnInit() {
    console.log('in sign-in component');
    this.role = this.route.snapshot.params['role'];
    this.route.params.subscribe((params: Params) => {
        const roleParam = params['role'].toLowerCase();
        if(this.roleList.includes(roleParam)) {
          this.role = roleParam;
          //set the type 
          if (this.role=="student") this.credentials.type=this.role
        }
        else {
          this.router.navigate(['/error'])
        }
      }
    );
  }

  partenaireRoleSelectionChanged(eventData: MatSelectChange){
    console.log(eventData.value);
    this.credentials.type=eventData.value
  }

 

   login() { 
     console.log('login')
     this.auth.login(this.credentials).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, (err) => {
      console.error(err);
   }); 
  }



}
