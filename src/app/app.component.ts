import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * state of the sidebar
   */
  sideBarOpened = false;

  /**
   * side nav menu routing items
   */
  sideNavItems:{name:string, path: string}[] = [
    {name: 'home', path: '/home'},
    {name: 'profile', path: 'profile'},
    {name: 'recommandation', path: 'training/recommandations'},
    {name: 'formation', path: '/training'},
    {name: 'create', path: '/training/create'},
    {name: 'inscription', path: 'inscription'},
  ]
}
