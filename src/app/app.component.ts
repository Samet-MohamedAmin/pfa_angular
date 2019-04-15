import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpened = false;

  sideNavItems = {
    home: '/home',
    profile: 'profile',
    recommandation: 'training/recommandations',
    formation: '/training',
    create: '/training/create',
    inscription: 'inscription',
  }


}
