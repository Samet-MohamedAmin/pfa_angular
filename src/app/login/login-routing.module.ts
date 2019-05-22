import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpSelectionComponent } from './sign-up/sign-up-selection/sign-up-selection.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInSelectionComponent } from './sign-in/sign-in-selection/sign-in-selection.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: 'sign-up', component: SignUpSelectionComponent},
  {path: 'sign-up/:role', component: SignUpComponent},
  {path: 'sign-in', component: SignInSelectionComponent},
  {path: 'sign-in/:role', component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
