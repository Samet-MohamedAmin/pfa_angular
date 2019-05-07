import { Component, OnInit, Input } from '@angular/core';
import { TrainingItemInterface } from '../training.interface';
import { TrainingRequestState } from '@4c-shared/shared.service';
import { AuthenticationService } from '@4c-auth/authentication.service';
import { TrainingService } from '../training.service';
import { environment } from '@4c-environments/environment';

@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.css']
})
export class TrainingItemComponent implements OnInit {
  @Input() training : any;

  imageBaseUrl: string = environment.BACKEND_IMAGE_URL + '/';

  ngOnInit(){
    console.log(this.training);
  }
}
