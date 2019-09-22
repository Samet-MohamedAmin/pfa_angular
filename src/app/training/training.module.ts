import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingCreateComponent } from './training-create/training-create.component';
import { TrainingCreateDescriptionComponent } from './training-create/training-create-description/training-create-description.component';
import { TrainingCreateGeneralComponent } from './training-create/training-create-general/training-create-general.component';
import { TrainingCreateSpecificationsComponent } from './training-create/training-create-specifications/training-create-specifications.component';
import { TrainingItemComponent } from './training-item/training-item.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingSearchComponent } from './training-search/training-search.component';
import { TrainingRecommandationsComponent } from './training-recommandations/training-recommandations.component';
import { TrainingService } from './training.service';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatButtonModule,
  MatIconModule, MatGridListModule, MatCardModule, MatDatepickerModule, MatStepperModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrainingRoutingModule,

    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  declarations: [
    TrainingCreateComponent,
    TrainingCreateDescriptionComponent,
    TrainingCreateGeneralComponent,
    TrainingCreateSpecificationsComponent,
    TrainingItemComponent,
    TrainingListComponent,
    TrainingSearchComponent,
    TrainingRecommandationsComponent,
    TrainingDetailsComponent,
  ],
  providers: [
    TrainingService
  ]

})
export class TrainingModule { }
