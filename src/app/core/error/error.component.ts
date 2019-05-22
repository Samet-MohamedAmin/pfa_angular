import { Component, OnInit } from '@angular/core';

/**
 * shows error message when navigating to undefined route
 */
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent{
  /**
   * main displayed error message
   */
  errorMessage = 'page NOT FOUND';

}
