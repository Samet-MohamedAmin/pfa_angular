import { Component, OnInit } from '@angular/core';
import { ROLES, ROLE_LIST } from '../login-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatSelectChange } from '@angular/material';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { CredentialsSignUpInterface } from './credentials-sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  roles = ROLES;
  roleList = ROLE_LIST;
  role: string;
  credentials: CredentialsSignUpInterface = { email: '', password: '', type: '' };

  constructor(private router: Router,
              private route: ActivatedRoute,){}
              // private auth: AuthenticationService,) { }

  ngOnInit() {
    this.role = this.route.snapshot.params['role'];
    this.route.params.subscribe((params: Params) => {
        const roleParam = params['role'].toLowerCase();
        if(this.roleList.includes(roleParam)) {
          this.role = roleParam;
        }
        else {
          this.router.navigate(['/error'])
        }
      }
    );
  }

  partenaireRoleSelectionChanged(eventData: MatSelectChange){
    console.log(eventData.value);
  }

  // register() {
  //   this.auth.register(this.credentials).subscribe((data) => {
  //     this.router.navigateByUrl('/');
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }

}
