import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TrainingRequestStudentInterface } from './training-request-student.interfce';

@Component({
  selector: 'app-training-request-student',
  templateUrl: './training-request-student.component.html',
  styleUrls: ['./training-request-student.component.css'],
})
export class TrainingRequestStudentComponent implements OnInit {
  @Input() trainingRequest: TrainingRequestStudentInterface;
  @Output() requestAccepted = new EventEmitter<number>();
  @Output() requestRejected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  rejectRequest(){
    console.log(`reject request [${this.trainingRequest.requestId}]`);
    this.requestRejected.emit(this.trainingRequest.requestId);
  }

  acceptRequest(){
    console.log(`accept request [${this.trainingRequest.requestId}]`);
    this.requestRejected.emit(this.trainingRequest.requestId);
  }

}
