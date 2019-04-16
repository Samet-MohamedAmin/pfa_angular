import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpened = false;

  sideNavItems = [
    {name: 'home', path: '/home'},
    {name: 'profile', path: 'profile'},
    {name: 'recommandation', path: 'training/recommandations'},
    {name: 'formation', path: '/training'},
    {name: 'create', path: '/training/create'},
    {name: 'inscription', path: 'inscription'},
  ]


}
