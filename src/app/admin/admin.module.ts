import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { TrainingRequestsComponent } from './training-requests/training-requests.component';
import { TrainingRequestStudentComponent } from './training-requests/training-request-student/training-request-student.component';
import { SharedModule } from '@4c-shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,

    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [
    TrainingRequestsComponent,
    TrainingRequestStudentComponent,

    // BackgroundImagePipe,
  ]
})
export class AdminModule { }
