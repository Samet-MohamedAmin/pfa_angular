import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileTrainingRequestsComponent } from './profile-training-requests/profile-training-requests.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, children: [
    {path: '', redirectTo: 'training-requests', pathMatch: 'full'},
    {path: 'training-requests', component: ProfileTrainingRequestsComponent}
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
