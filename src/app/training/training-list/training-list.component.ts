import { Component, OnInit, Input } from '@angular/core';
import { IMAGE_SRC_BASE, IMAGES, SharedService } from 'src/app/shared/shared.service';
import { TrainingItemInterface, TRAINING_TYPE_LIST } from '../training.interface';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  //this is the right variable to use as list of trainings

  @Input()trainingsList:Array<any>
  
  @Input()trainingList: TrainingItemInterface[] = [];
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
        instructor: randomTraining.instructor,
        startDate: trainingDate,
        endDate: trainingDate,
        totalHours: 10,
        totalPlaces: 10,

        levels: [SharedService.getRandomNumber(0, 3)],
        requirements: [],
        type: SharedService.getRandomObject(TRAINING_TYPE_LIST),
        concernedBranches: [],

        goals: [],
        briefDescription: this.dummyText,
        detailedDescription: this.dummyText,

        imageSrc: IMAGE_SRC_BASE + randomTraining.imageSrc,
        imageAlt: randomTraining.imageSrc,
        rating: SharedService.getRandomNumber(0, 10),
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