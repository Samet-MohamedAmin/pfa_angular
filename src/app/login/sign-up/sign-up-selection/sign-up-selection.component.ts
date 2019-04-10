import { Component, OnInit } from '@angular/core';
import { ROLES, ROLE_LIST } from '../../login-service.service';

@Component({
  selector: 'app-sign-up-selection',
  templateUrl: './sign-up-selection.component.html',
  styleUrls: ['./sign-up-selection.component.css']
})
export class SignUpSelectionComponent implements OnInit {
  roles = ROLES;
  roleList = ROLE_LIST;
  
  constructor() { }

  ngOnInit() {
  }

}