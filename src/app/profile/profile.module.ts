import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileTrainingRequestsComponent } from './profile-training-requests/profile-training-requests.component';
import { ProfileTrainingRequestItemComponent } from './profile-training-requests/profile-training-request-item/profile-training-request-item.component';
import { MatGridListModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,

    MatGridListModule,
    MatCardModule,
  ],
  declarations: [
    ProfileComponent,
    ProfileTrainingRequestsComponent,
    ProfileTrainingRequestItemComponent,
  ]
})
export class ProfileModule { }
