import { Component, OnInit } from '@angular/core';
import { ROLES, ROLE_LIST, BRANCHES } from '../login-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatSelectChange } from '@angular/material';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Student,Teacher,Partner } from './credentials-sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  roles = ROLES;
  roleList = ROLE_LIST;
  role: string;
  credentials:any={} ;
  formFieldAppearance = "outline";
  branches = BRANCHES;
  yearOfStudy = [1, 2, 3, 4, 5];

  constructor(private router: Router,
              private route: ActivatedRoute,
               private auth: AuthenticationService) { }

  ngOnInit() {
    this.role = this.route.snapshot.params['role'];
    this.route.params.subscribe((params: Params) => {
        const roleParam = params['role'].toLowerCase();
        if(this.roleList.includes(roleParam)) {
          this.role = roleParam;
          if(this.role == this.roleList[0]){
            this.credentials=new Student()
            this.credentials.type = this.role;
          }
        }
        else {
          this.router.navigate(['/error'])
        }
      }
    );
  }

  partenaireRoleSelectionChanged(eventData: MatSelectChange){
    console.log(eventData.value);
    if(eventData.value=="teacher"){
      this.credentials=new Teacher()
      this.credentials.type = eventData.value

    }else if(eventData.value="partner"){
      this.credentials=new Partner()
      this.credentials.type = eventData.value
    }
  }
  branchSelected(eventData: MatSelectChange){
    console.log(eventData.value);
    this.credentials.branch = eventData.value;
  }

  yearOfStudySelected(eventData: MatSelectChange){
    console.log(eventData.value);
    this.credentials.yearOfStudy = eventData.value;
  }
  departmentSelected(eventData: MatSelectChange){
    console.log(eventData.value);
    this.credentials.department = eventData.value;
  }

  
  register() {
    if(this.credentials.type=="student"){
      this.credentials.requestedPath="soft_skills"
    }
     this.auth.register(this.credentials).subscribe((data) => {
       this.router.navigateByUrl('/');
     }, (err) => {
       console.error(err);
     });
   }

}
