import { Component, OnInit } from '@angular/core';
import { ROLES } from '../../login-service.service';

@Component({
  selector: 'app-sign-in-selection',
  templateUrl: './sign-in-selection.component.html',
  styleUrls: ['./sign-in-selection.component.css']
})
export class SignInSelectionComponent implements OnInit {
  roles = ROLES;
  roleList = Object.keys(ROLES);

  constructor() { }

  ngOnInit() {
  }

}
