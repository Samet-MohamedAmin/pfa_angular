import { Component, OnInit } from '@angular/core';
import { TrainingRequestStudentInterface } from './training-request-student/training-request-student.interfce';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-training-requests',
  templateUrl: './training-requests.component.html',
  styleUrls: ['./training-requests.component.css'],
})
export class TrainingRequestsComponent implements OnInit {
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
  trainingRequestStudentList:TrainingRequestStudentInterface[] = [];

  constructor() { }

  ngOnInit() {
    this.createDummyRequestStudent();
  }
  /**
   * creates trainingrequestStudentItem containing random properties
   */
  createDummyRequestStudent():void{
    let trainingRequestStudentItem: TrainingRequestStudentInterface = {
      requestId: 0,
      courseTitle: 'Introduction To Computer Science',
      courseDescriptionShort: this.dummyText,
      courseImage: '/assets/images/computer_01.jpg',
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