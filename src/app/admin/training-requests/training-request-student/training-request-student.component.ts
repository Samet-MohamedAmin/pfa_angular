import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TrainingRequestStudentInterface } from './training-request-student.interface';
import { environment } from '@4c-environments/environment';
import { TrainingService } from 'app/training/training.service';
import { AuthenticationService } from '@4c-auth/authentication.service';

@Component({
  selector: 'app-training-request-student',
  templateUrl: './training-request-student.component.html',
  styleUrls: ['./training-request-student.component.css'],
})
export class TrainingRequestStudentComponent implements OnInit {
  @Input() trainingRequest: TrainingRequestStudentInterface;
  @Output() requestAccepted = new EventEmitter<number>();
  @Output() requestRejected = new EventEmitter<number>();

  imageBaseUrl: string = environment.BACKEND_IMAGE_URL + '/';

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
  }

  /**
   * triggered when after clicking on the reject button.
   * trigger the requestRejected event
   */
  rejectRequest(){
    console.log(`reject request [${this.trainingRequest.requestId}]`);
    this.requestRejected.emit(this.trainingRequest.requestId);

    const userId = this.trainingRequest.studentId;
    const courseId = this.trainingRequest.courseId;
    this.trainingService.rejectRegistration(userId, courseId).subscribe(
      obj => console.log(obj)
    );
  }

  /**
   * triggered when after clicking on the accept button.
   * trigger the requestAccepted event
   */
  acceptRequest(){
    console.log(`accept request [${this.trainingRequest.requestId}]`);
    this.requestAccepted.emit(this.trainingRequest.requestId);

    const userId = this.trainingRequest.studentId;
    const courseId = this.trainingRequest.courseId;
    const role = 'student';
    this.trainingService.validRegistration(role, userId, courseId).subscribe(
      obj => console.log(obj)
    );
  }

}
