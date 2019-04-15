import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpened = false;

  sideNavItems = {
    profile: 'profile',
    recommandation: 'recommandation',
    formation: '/training',
    create: '/training/create',
    inscription: 'inscription',
  }


}
