import { Component } from '@angular/core';
import { ROLES, ROLE_LIST } from '../../login-service.service';

/**
 * sign-in selection component
 */
@Component({
  selector: 'app-sign-in-selection',
  templateUrl: './sign-in-selection.component.html',
  styleUrls: ['./sign-in-selection.component.css']
})
export class SignInSelectionComponent {
  /**
   * holds `ROLES` object
   */
  roles = ROLES;
  /**
   * holds `ROLE_LIST` object
   */
  roleList = ROLE_LIST;
}
