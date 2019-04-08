import { Component, OnInit } from '@angular/core';
import { ROLES } from '../login-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  roles = ROLES;
  roleList = Object.keys(ROLES);
  role: string;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

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

}
