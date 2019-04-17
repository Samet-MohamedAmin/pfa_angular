import { Component, OnInit } from '@angular/core';
import { ProfileTrainingRequestInterface } from './profile-training-request-item/profile-training-request.interface';
import { TRAINING_REQUEST_STATE_LIST, IMAGES, SharedService, IMAGE_SRC_BASE } from '@4c-shared/shared.service';

@Component({
  selector: 'app-profile-training-requests',
  templateUrl: './profile-training-requests.component.html',
  styleUrls: ['./profile-training-requests.component.css']
})
export class ProfileTrainingRequestsComponent implements OnInit {
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing';
  trainingRequestList: ProfileTrainingRequestInterface[] = [];
  
  constructor() { }

  ngOnInit() {
    this.createDummyTrainingRequestList();
  }

  createDummyTrainingRequestList():void{
    const trainingRequestItem: ProfileTrainingRequestInterface = {
      requestId: 0,

      courseTitle: 'Really Awesome Course',
      courseInstructor: 'Linus Torvaldos', 
      courseDescriptionShort: this.dummyText,
      courseImageSrc: '',
      courseStartDate: new Date(Date.now()),

      state: TRAINING_REQUEST_STATE_LIST[0],

      hide: false,
    };

    for(let i=0; i<15; i++){
      const trainingRequest: ProfileTrainingRequestInterface = {...trainingRequestItem};
      trainingRequest.requestId = i;
      trainingRequest.courseImageSrc = IMAGE_SRC_BASE + SharedService.getRandomObject(Object.values(IMAGES));
      trainingRequest.state = SharedService.getRandomObject(TRAINING_REQUEST_STATE_LIST);
      this.trainingRequestList.push(trainingRequest);
    }
  }

}
