import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TrainingRequestStudentInterface } from './training-request-student.interface';

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

  /**
   * triggered when after clicking on the reject button.
   * trigger the requestRejected event
   */
  rejectRequest(){
    console.log(`reject request [${this.trainingRequest.requestId}]`);
    this.requestRejected.emit(this.trainingRequest.requestId);
  }

  /**
   * triggered when after clicking on the accept button.
   * trigger the requestAccepted event
   */
  acceptRequest(){
    console.log(`accept request [${this.trainingRequest.requestId}]`);
    this.requestAccepted.emit(this.trainingRequest.requestId);
  }

}
