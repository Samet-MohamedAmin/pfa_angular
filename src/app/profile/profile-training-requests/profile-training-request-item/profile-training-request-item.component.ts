import { Component, OnInit, Input } from '@angular/core';
import { ProfileTrainingRequestInterface } from './profile-training-request.interface';
import { TRAINING_REQUEST_STATE_LIST, TrainingRequestState } from '@4c-shared/shared.service';

@Component({
  selector: 'app-profile-training-request-item',
  templateUrl: './profile-training-request-item.component.html',
  styleUrls: ['./profile-training-request-item.component.css']
})
export class ProfileTrainingRequestItemComponent implements OnInit {
  @Input() trainingRequest: ProfileTrainingRequestInterface;
  trainingRequestStateList: TrainingRequestState[] = TRAINING_REQUEST_STATE_LIST;

  constructor() { }

  ngOnInit() {
  }

}
