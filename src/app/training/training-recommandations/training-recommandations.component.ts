import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training-recommandations',
  templateUrl: './training-recommandations.component.html',
  styleUrls: ['./training-recommandations.component.css']
})
export class TrainingRecommandationsComponent implements OnInit {
userDetails:any;
recommandedTrainings
  constructor(private authService :AuthenticationService,
              private trainingService:TrainingService) { 
    this.userDetails=this.authService.getUserDetails();
    this.trainingService
          .getRecommendations(this.userDetails.role,this.userDetails._id)
          .subscribe(recommandedTrainings=>this.recommandedTrainings=recommandedTrainings)
  }

  ngOnInit() {
  }

}
