import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileTrainingRequestsComponent } from './profile-training-requests/profile-training-requests.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, children: [
    {path: '', redirectTo: 'edit', pathMatch: 'full'},
    {path: 'edit', component: ProfileEditComponent},
    {path: 'training-requests', component: ProfileTrainingRequestsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
