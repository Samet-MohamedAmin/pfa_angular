import { Component, OnInit } from '@angular/core';
import { IMAGE_SRC_BASE, IMAGES, SharedService } from 'src/app/shared/shared.service';
import { TrainingItemInterface } from '../training-item/training-item.interface';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  trainingList: TrainingItemInterface[] = [];
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing';
  dummyTrainingList: TrainingItemBriefInterface[] = [
    {
      title: 'Awesome Chemistry Training',
      imageSrc: IMAGES.chemistry,
      instructor: 'Mary Cute'
    },
    {
      title: 'Embedded Circuit Training',
      imageSrc: IMAGES.circuit,
      instructor: 'Ray'
    },
    {
      title: 'Computer Science Training',
      imageSrc: IMAGES.computer,
      instructor: 'Levy Ackerman'
    },
    {
      title: 'Awesome Maitenance Training',
      imageSrc: IMAGES.maintenance,
      instructor: 'John Doe'
    },
    {
      title: 'Awesome Biology Training',
      imageSrc: IMAGES.microscope,
      instructor: 'Emma'
    },
    {
      title: 'Network and Security Training',
      imageSrc: IMAGES.network,
      instructor: 'Norman'
    },
  ];

  constructor() { }

  ngOnInit() {
    let dateNow:Date = new Date(Date.now());
    for(let i=0; i<20; i++){
      let trainingDate: Date = new Date();
      trainingDate.setMonth(dateNow.getMonth() + SharedService.getRandomNumber(-6, 6));
      trainingDate.setDate(dateNow.getDate() + SharedService.getRandomNumber(-15, 15));
      const randomTraining = SharedService.getRandomObject(this.dummyTrainingList);
      const trainingItem:TrainingItemInterface = {
        title: randomTraining.title,
        description: this.dummyText,
        imageSrc: IMAGE_SRC_BASE + randomTraining.imageSrc,
        imageAlt: randomTraining.imageSrc,
        instructor: randomTraining.instructor,
        level: SharedService.getRandomNumber(0, 3),
        rating: SharedService.getRandomNumber(0, 10),
        date: trainingDate,
        type: SharedService.getRandomNumber(0, 3)
      };

      this.trainingList.push(trainingItem);
    }
  }

}


interface TrainingItemBriefInterface {
  title: String;
  imageSrc: String;
  instructor: String;
}