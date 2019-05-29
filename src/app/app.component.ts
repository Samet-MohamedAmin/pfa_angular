import { Component } from '@angular/core';
import { AuthenticationService } from '@4c-auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthenticationService) {
    let itemNameList = [...this.sideNavItemNameList.base];

    if(auth.isLoggedIn()) {
      itemNameList.push(...this.sideNavItemNameList.loggedIn);
      
      const role:string = auth.getUserDetails().role.toLowerCase();
      itemNameList.push(...this.sideNavItemNameList[role]);
    }

    itemNameList.forEach(
      (itemName:string) => {
        const originalItem: {name:string, path: string} 
                = this.sideNavOriginalItems
                        .find(item =>item.name == itemName );
        this.sideNavItems.push(originalItem);
      }
    );
  }

  /**
   * state of the sidebar
   */
  sideBarOpened = false;

  sideNavOriginalItems: {name:string, path: string}[] = [
    {name: 'home', path: '/home'},
    {name: 'profile', path: '/profile'},
    {name: 'achievements', path: '/achievements'},
    {name: 'formations', path: '/training'},
    {name: 'recommandation', path: '/training/recommandations'},
    {name: 'create', path: '/training/create'},
  ];

  /**
   * customize appearing elements to every profile role
   */
  sideNavItemNameList = {
    base: ['home', 'achievements', 'formations'],
    loggedIn: ['profile'],
    student: ['recommandation'],
    teacher: ['recommandation'],
    partner: [],
    personal: ['create']
  };

  /**
   * side nav menu routing items
   */
  sideNavItems: {name:string, path: string}[] = [];
}
