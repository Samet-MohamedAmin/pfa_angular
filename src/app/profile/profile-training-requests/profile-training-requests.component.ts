import { Component, OnInit } from '@angular/core';
import { ProfileTrainingRequestInterface } from './profile-training-request-item/profile-training-request.interface';
import { TRAINING_REQUEST_STATE_LIST, IMAGES, SharedService, IMAGE_SRC_BASE } from '@4c-shared/shared.service';
import { TrainingService } from 'app/training/training.service';
import { AuthenticationService } from '@4c-auth/authentication.service';

@Component({
  selector: 'app-profile-training-requests',
  templateUrl: './profile-training-requests.component.html',
  styleUrls: ['./profile-training-requests.component.css']
})
export class ProfileTrainingRequestsComponent implements OnInit {
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing';
  trainingRequestList: ProfileTrainingRequestInterface[] = [];
  
  constructor(private trainingService: TrainingService,
              private auth: AuthenticationService) { }

  ngOnInit() {
    // this.createDummyTrainingRequestList();

    const user = this.auth.getUserDetails();

    this.trainingService.getUserRequests(user._id).subscribe(
      (trainingRequestList: any[]) => {
        console.log(trainingRequestList);
        trainingRequestList.forEach((trainingRequest) => {
          const request = this.createTrainingRequestItem(trainingRequest);
          this.trainingRequestList.push(request);
        });
      }
    );
  }

  createTrainingRequestItem(trainingRequest: any):ProfileTrainingRequestInterface {
    const trainingRequestItem: ProfileTrainingRequestInterface = {
      courseId: 0,

      courseTitle: trainingRequest.course.title,
      courseInstructor: trainingRequest.course.instructor, 
      courseDescriptionShort: trainingRequest.course.briefDescription,
      courseImageSrc: IMAGE_SRC_BASE + SharedService.getRandomObject(Object.values(IMAGES)),
      courseStartDate: trainingRequest.course.startDate,

      state: trainingRequest.state.toUpperCase(),

      hide: false,
    };


    return trainingRequestItem;
  }

  createDummyTrainingRequestList():void{
    const trainingRequestItem: ProfileTrainingRequestInterface = {
      courseId: 0,

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
      trainingRequest.courseId = i;
      trainingRequest.courseImageSrc = IMAGE_SRC_BASE + SharedService.getRandomObject(Object.values(IMAGES));
      trainingRequest.state = SharedService.getRandomObject(TRAINING_REQUEST_STATE_LIST);
      this.trainingRequestList.push(trainingRequest);
    }
  }

}
