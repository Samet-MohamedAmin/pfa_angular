import { Component, OnInit } from '@angular/core';
import { ROLES, ROLE_LIST } from '../../login-service.service';

@Component({
  selector: 'app-sign-in-selection',
  templateUrl: './sign-in-selection.component.html',
  styleUrls: ['./sign-in-selection.component.css']
})
export class SignInSelectionComponent implements OnInit {
  roles = ROLES;
  roleList = ROLE_LIST;

  constructor() { }

  ngOnInit() {
  }

}
