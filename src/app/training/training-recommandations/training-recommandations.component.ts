import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@4c-auth/authentication.service';
import { TrainingService } from '../training.service';
import { TrainingItemInterface } from '../training.interface';

@Component({
  selector: 'app-training-recommandations',
  templateUrl: './training-recommandations.component.html',
  styleUrls: ['./training-recommandations.component.css']
})
export class TrainingRecommandationsComponent {
  userDetails:any;
  recommendedTrainings: TrainingItemInterface[] = [];
  
  constructor(private authService :AuthenticationService,
              private trainingService:TrainingService) {
    this.userDetails = this.authService.getUserDetails();
    this.trainingService
          .getRecommendations(this.userDetails.role, this.userDetails._id)
          .subscribe((trainings: TrainingItemInterface[]) => {
              this.recommendedTrainings = trainings;
              console.log(this.recommendedTrainings);
            }
          );
  }

}
