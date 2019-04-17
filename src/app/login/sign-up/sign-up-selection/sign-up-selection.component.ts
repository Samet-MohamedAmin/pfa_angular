import { Component } from '@angular/core';
import { ROLES, ROLE_LIST } from '../../login-service.service';

/**
 * sign-up selection component
 */
@Component({
  selector: 'app-sign-up-selection',
  templateUrl: './sign-up-selection.component.html',
  styleUrls: ['./sign-up-selection.component.css']
})
export class SignUpSelectionComponent{
  /**
   * holds `ROLES` object
   */
  roles = ROLES;
  /**
   * holds `ROLE_LIST` object
   */
  roleList = ROLE_LIST;
}
