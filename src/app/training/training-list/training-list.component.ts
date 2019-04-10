import { Component, OnInit } from '@angular/core';
import { TrainingItemInterface } from '../training-item/training-item.interface';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  trainingList: TrainingItemInterface[] = [];
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing';

  constructor() { }

  ngOnInit() {
    for(let i=0; i<20; i++){
      const trainingItem:TrainingItemInterface = {
        title: 'Awesome Training',
        description: this.dummyText,
        imageSrc: 'assets/images/computer_01.jpg',
        imageAlt: 'Training Image',
        instructor: 'John Doe',
        level: Math.floor(Math.random()*3),
        rating: 4,
        date: new Date(Date.now())
      };

      this.trainingList.push(trainingItem);
    }
  }

}
