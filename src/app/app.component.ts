import { Component } from '@angular/core';
import { AuthenticationService } from '@4c-auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthenticationService) {
    this.initialiseSideNavitems();
    this.auth.userEmitter.subscribe((userDetails)=>{
      this.initialiseSideNavitems();
    })
  }

  initialiseSideNavitems(){
    let itemNameList = [...this.sideNavItemNameList.base];

    if(this.auth.isLoggedIn()) {
      itemNameList.push(...this.sideNavItemNameList.loggedIn);
      
      const role:string = this.auth.getUserDetails().role.toLowerCase();
      console.log(role);
      itemNameList.push(...this.sideNavItemNameList[role]);
    }

    let newSideNavItems=[];
    itemNameList.forEach(
      (itemName:string) => {
        const originalItem: {name:string, path: string} 
                = this.sideNavOriginalItems
                        .find(item =>item.name == itemName );
        newSideNavItems.push(originalItem);
      }
    );
    this.sideNavItems=newSideNavItems
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
    {name: 'recommandation', path: '/training/recommendations'},
    {name: 'create', path: '/training/create'},
    {name: 'demandes de formations', path: '/admin/training-requests'},
    {name: 'docs', path: 'https://4c-docs.netlify.com/'}
  ];

  /**
   * customize appearing elements to every profile role
   */
  sideNavItemNameList = {
    base: ['home', 'achievements', 'formations', 'docs'],
    loggedIn: ['profile'],
    student: ['recommandation'],
    teacher: ['recommandation'],
    partner: [],
    personal: ['create', 'demandes de formations']
  };

  /**
   * side nav menu routing items
   */
  sideNavItems: {name:string, path: string}[] = [];
}
