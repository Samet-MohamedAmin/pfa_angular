import { Component, OnInit } from '@angular/core';
import { TrainingRequestStudentInterface } from './training-request-student/training-request-student.interface';
import { TrainingService } from 'app/training/training.service';
import { AuthenticationService } from '@4c-auth/authentication.service';

@Component({
  selector: 'app-training-requests',
  templateUrl: './training-requests.component.html',
  styleUrls: ['./training-requests.component.css'],
})
export class TrainingRequestsComponent implements OnInit {
  /**
   * contains random text.
   * used for developement purpose only
   */
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
  /**
   * holds list of student requests
   */
  trainingRequestStudentList:TrainingRequestStudentInterface[] = [];

  constructor(private trainingService: TrainingService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.trainingService.getAllUserRequests().subscribe(
      (requestList: any[]) => {
        requestList.forEach((requestItem: any) => {
          this.trainingRequestStudentList.push(this.mapRequest(requestItem));
        });
        console.log(this.trainingRequestStudentList);
      }
    );
    // this.createDummyRequestStudent();
  }

  mapRequest(request: any): TrainingRequestStudentInterface { 
    const studentOverview = `requested path: ${request.user.requestedPath},
                              attended courses: ${request.user.coursesAttended.length}`;
    const trainingRequestStudentItem: TrainingRequestStudentInterface = {
      requestId: request._id,

      courseId: request.course._id,
      courseTitle: request.course.title,
      courseDescriptionShort: request.course.briefDescription,
      courseImage: request.course.courseImage,

      studentId: request.user._id,
      studentBranch: request.user.branch,
      studentFirstName: request.user.firstName,
      studentLastName: request.user.lastName,
      studentOverview: studentOverview,
      studentStudyYear: request.user.yearOfStudy,
      hide: false,
    }
    return trainingRequestStudentItem;
  }

  /**
   * creates trainingrequestStudentItem containing random properties
   */
  createDummyRequestStudent():void{
    let trainingRequestStudentItem: TrainingRequestStudentInterface = {
      requestId: 0,
      
      courseId: '0',
      courseTitle: 'Introduction To Computer Science',
      courseDescriptionShort: this.dummyText,
      courseImage: '/assets/images/computer_01.jpg',

      studentId: '0',
      studentBranch: 'GL',
      studentFirstName: 'Amin',
      studentLastName: 'Samet',
      studentOverview: this.dummyText,
      studentStudyYear: 4,
      hide: false,
    }

    for(let i=0; i<15; i++){
      let trainingRequest:TrainingRequestStudentInterface = {...trainingRequestStudentItem};
      trainingRequest.requestId = i;
      this.trainingRequestStudentList.push(trainingRequest);
    }
  }

  /**
   * removes selected request from request list
   * @param requestId id of the request to remove
   */
  removeRequest(requestId: number){
    console.log(`remove request ${requestId}`);

    let index:number= this.trainingRequestStudentList.findIndex((v)=> v.requestId == requestId);
    this.trainingRequestStudentList[index].hide = true;
    setTimeout(()=> this.trainingRequestStudentList.splice(index, 1), 300);
  }

  /**
   * triggered when accepting a request.
   * @param eventData id of the selected request
   */
  onRequestAccept(eventData:number){
    this.removeRequest(eventData);
  }

  /**
   * triggered when rejecting a request
   * @param eventData id of the selected request
   */
  onRequestReject(eventData:number){
    this.removeRequest(eventData);
  }

}