import { Component, OnInit } from '@angular/core';
import { TrainingRequestStudentInterface } from './training-request-student/training-request-student.interfce';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-training-requests',
  templateUrl: './training-requests.component.html',
  styleUrls: ['./training-requests.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class TrainingRequestsComponent implements OnInit {
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
  trainingRequestStudentList:TrainingRequestStudentInterface[] = [];

  constructor() { }

  ngOnInit() {
    this.createDummyRequestStudent();
  }

  createDummyRequestStudent():void{
    let trainingRequestStudentItem: TrainingRequestStudentInterface = {
      requestId: 0,
      courseTitle: 'Introduction To Computer Science',
      courseDescriptionShort: this.dummyText,
      studentBranch: 'GL',
      studentFirstName: 'Amin',
      studentLastName: 'Samet',
      studentOverview: this.dummyText,
      studentStudyYear: 4,
      state: 'show'
    }

    for(let i=0; i<15; i++){
      let trainingRequest:TrainingRequestStudentInterface = {...trainingRequestStudentItem};
      trainingRequest.requestId = i;
      this.trainingRequestStudentList.push(trainingRequest);
    }
  }

  removeRequest(requestId: number){
    console.log(`remove request ${requestId}`);
    this.trainingRequestStudentList = this.trainingRequestStudentList.filter(
      (trainingRequest: TrainingRequestStudentInterface)=> trainingRequest.requestId != requestId
    );
  }

  onRequestAccept(eventData){
    console.log(eventData);
    this.removeRequest(eventData);
  }

  onRequestReject(eventData){
    console.log(eventData);
    this.removeRequest(eventData);
  }

}