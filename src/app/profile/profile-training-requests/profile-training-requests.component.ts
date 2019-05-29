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
      courseImageSrc: trainingRequest.course.courseImage,
      courseStartDate: trainingRequest.course.startDate,

      state: trainingRequest.state.toUpperCase(),

      // hide parameter is used for the animation
      hide: false,
    };

    return trainingRequestItem;
  }

  // getCourseImageFromServer(courseImage: string){
  //   const imageName = courseImage.s
  // }

}
