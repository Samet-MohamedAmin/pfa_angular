import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileTrainingRequestsComponent } from './profile-training-requests/profile-training-requests.component';
// tslint:disable-next-line: max-line-length
import { ProfileTrainingRequestItemComponent } from './profile-training-requests/profile-training-request-item/profile-training-request-item.component';
import { MatGridListModule, MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
  MatDatepickerModule, MatInputModule, MatButtonModule} from '@angular/material';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,

    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    ProfileTrainingRequestsComponent,
    ProfileTrainingRequestItemComponent,
  ]
})
export class ProfileModule { }
