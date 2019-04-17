import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { IMAGE_SRC_BASE, IMAGES, SharedService } from '@4c-shared/shared.service';
import { TrainingItemInterface, TRAINING_TYPE_LIST } from '../training.interface';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit, OnChanges {
  //this is the right variable to use as list of trainings

  
  @Input()trainingList: TrainingItemInterface[] = [];
 

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.trainingList.currentValue)
    
  }

}
