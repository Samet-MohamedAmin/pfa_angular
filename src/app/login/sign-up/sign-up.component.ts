import { Component, OnInit } from '@angular/core';
import { ROLES, ROLE_LIST } from '../login-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatSelectChange } from '@angular/material';
import { AuthenticationService } from '@4c-auth/authentication.service';
import { Student,Teacher,Partner } from './credentials-sign-up';
import { BRANCHES, STUDENT_PATH_LIST, StudentPathType } from '@4c-shared/shared.service';

/**
 * sign-up component
 */
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  roles: {} = ROLES;
  roleList: string[] = ROLE_LIST;
  role: string;
  credentials:any={};
  branches: {} = BRANCHES;
  yearOfStudy: number[] = [1, 2, 3, 4, 5];
  pathList: StudentPathType[] = STUDENT_PATH_LIST;
  
  formFieldAppearance = "outline";

  constructor(private router: Router,
              private route: ActivatedRoute,
               private auth: AuthenticationService) { }

  ngOnInit() {
    this.role = this.route.snapshot.params.role;
    this.route.params.subscribe((params: Params) => {
        const roleParam = params.role.toLowerCase();
        if(this.roleList.includes(roleParam)) {
          this.role = roleParam;
          if(this.role == this.roleList[0]){
            this.credentials=new Student();
            this.credentials.type = this.role;
          }
          else if (this.role == this.roleList[2]) this.router.navigate(['/error']);
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
  professionalRoleSelectionChanged(eventData: MatSelectChange){
    // TODO: credentials constructor problem
    console.log(eventData.value);
    if(eventData.value=="teacher"){
      this.credentials=new Teacher();
      this.credentials.type = eventData.value

    }else if(eventData.value="partner"){
      this.credentials=new Partner();
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

  genderSelected(eventData: MatSelectChange){
    console.log(eventData.value);
    this.credentials.gender = eventData.value;

  }

  departmentSelected(eventData: MatSelectChange){
    console.log(eventData.value);
    this.credentials.department = eventData.value;
  }

  requestedPathSelected(eventData: MatSelectChange){
    console.log(eventData.value);
    this.credentials.requestedPath = eventData.value;
  }
  
  /**
   * register a user with credentials given in the form
   */
  register() {
    console.log(this.credentials)
     this.auth.register(this.credentials).subscribe((data) => {
      this.auth.updateUserState()
      this.router.navigateByUrl('/');
     }, (err) => {
       console.error(err);
     });
   }

}
