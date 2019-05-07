import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsComponent } from './achievements.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { AchievementsRoutingModule } from './achievements-routing.module';
import { MatCardModule, MatIconModule, MatGridListModule, MatDividerModule, MatExpansionModule } from '@angular/material';
import { IndicatorService } from './indicator/indicator.service';

@NgModule({
  imports: [
    CommonModule,
    AchievementsRoutingModule,

    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,    
  ],
  declarations: [
    AchievementsComponent,
    IndicatorComponent,
  ],
  providers:[
    IndicatorService
  ]
})
export class AchievementsModule { }
