import { Component, OnInit } from '@angular/core';
import { BRANCHES, BRANCH_LIST, IMAGES, SharedService, IMAGE_SRC_BASE } from 'src/app/shared/shared.service';
import { TRAINING_TYPE_LIST, TRAINING_LEVEL, TrainingItemInterface } from '../training.interface';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from '../training.service';
@Component({
  selector: 'app-training-search',
  templateUrl: './training-search.component.html',
  styleUrls: ['./training-search.component.css']
})
export class TrainingSearchComponent implements OnInit {
  //dummy data work

  trainingList:Array<any>=[];
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing';
  dummyTrainingList = [
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
  
  
  //for real work
  searchValue = '';
  parameters = {
    levels: TRAINING_LEVEL,
    types: TRAINING_TYPE_LIST,
    branches: BRANCHES,
    branchList: BRANCH_LIST,
  }
  //binded properties
  activeBranch:any;
  levels:Array<any>=[];
  trainingType:any;
    
  allTrainings:any;
  filteredTrainings:Array<any>=[];

  constructor(private route :ActivatedRoute, private trainingService:TrainingService) { 
    this.createDummyData()
    this.filterTrainings()
    this.trainingService.getAllTrainings()
    .subscribe(trainings =>{
     this.allTrainings=trainings
     this.route.queryParams
     .subscribe(params=>{
       if(params.branchCode){
        this.activeBranch=params.branchCode
       }
       if(params.searchValue){
        this.searchValue=params.searchValue
      }
   // this.filterTrainings()
     })
    })
  
   
  }

  ngOnInit() {
  }

  createDummyData(){
    const dateNow:Date = new Date(Date.now());
    for(let i=0; i<20; i++){
      const branch_1 = SharedService.getRandomObject(BRANCH_LIST);
      const branch_2 = SharedService.getRandomObject(BRANCH_LIST.filter((v) => v!=branch_2));
      
      const trainingDate: Date = new Date();
      trainingDate.setMonth(dateNow.getMonth() + SharedService.getRandomNumber(-6, 6));
      trainingDate.setDate(dateNow.getDate() + SharedService.getRandomNumber(-15, 15));

      const randomTraining = SharedService.getRandomObject(this.dummyTrainingList);
      const trainingItem: TrainingItemInterface = {
        title: randomTraining.title,
        instructor: randomTraining.instructor,
        startDate: trainingDate,
        endDate: trainingDate,
        totalHours: 10,
        totalPlaces: 10,

        level: SharedService.getRandomNumber(0, 3),
        requirements: [],
        type: SharedService.getRandomObject(TRAINING_TYPE_LIST),
        concernedBranches: [branch_1, branch_2],

        goals: [],
        descriptionShort: this.dummyText,
        descriptionDetailed: this.dummyText,

        imageSrc: IMAGE_SRC_BASE + randomTraining.imageSrc,
        imageAlt: randomTraining.imageSrc,
        rating: SharedService.getRandomNumber(0, 10),
      };

      this.trainingList.push(trainingItem);
    }
  }


  levelChange(eventData:any){
    console.log(eventData);
    if (eventData.checked){
      this.levels.push(eventData.source.value);
    }else if(!eventData.checked) {
      let index=this.levels.indexOf(eventData.source.value);
      if (index >-1) this.levels.splice(index,1);
    }
    console.log(this.levels);
    this.filterTrainings();
  }

  typeChanged(eventData:any){
    this.trainingType=eventData.value;
    this.filterTrainings();
  }

  /**
   * returns true when `this.searchValue` is in `training.title` or `training.instructor`
   * or `training.descriptionShort`.
   * I've added this method because the search may concern information other 
   * than title like __description__ or __instructor__
   * @param training training item in filterT training callback
   */
  filterSearch(training:TrainingItemInterface, searchValue):boolean{
    if(!searchValue.length) return true;
    if(training.title.toLowerCase().includes(searchValue)) return true;
    if(training.instructor.toLowerCase().includes(searchValue)) return true
    // if(training.descriptionShort.toLowerCase().includes(searchValue)) return true;
    return false;
  }

  filterTrainings() {
    console.log("--------> filter trainings");
    console.log(this.searchValue);
    this.filteredTrainings=this.trainingList.filter((training:TrainingItemInterface)=>{
      if(!this.trainingType || (this.trainingType == training.type) || (this.trainingType=="all"))
        if(!this.activeBranch || training.concernedBranches.includes(this.activeBranch))
          if(!this.levels.length || this.levels.includes(training.level))
            if(this.filterSearch(training, this.searchValue.toLowerCase()))
              return true
      return false;
    })
    
  }


  //this is an an other solution not used now for the filtering
/*
filterCondition(){ 
  //all 4 filters are active
  if(this.activeBranch &&(this.trainingType && this.trainingType!="alltypes") && this.levels.length>0 &&this.searchValue.length>0){
    console.log('1')
     return function(training){
     return training.concernedBranches.includes(this.activeBranch) && this.levels.includes(training.level) && training.type==this.trainingType && training.title.includes(this.searchValue)
     } 


  //only 3 filters are active
  }else if((this.trainingType && this.trainingType!="alltypes") && this.levels.length>0 &&this.searchValue.length>0 ){
    console.log('2')
    return function(training){
    return this.levels.includes(training.level) && training.type==this.trainingType && training.title.includes(this.searchValue)
    }

  } else if( this.activeBranch && this.levels.length>0 && this.searchValue.length>0 ){
    console.log('3')
    return function(training){
    return training.concernedBranches.includes(this.activeBranch) && this.levels.includes(training.level) && training.title.includes(this.searchValue)
    }

  } else if(this.activeBranch &&(this.trainingType && this.trainingType!="alltypes")  &&this.searchValue.length>0){
    console.log('4')
    return function(training){
    return training.concernedBranches.includes(this.activeBranch)  && training.type==this.trainingType && training.title.includes(this.searchValue)
    }

  }else if(this.activeBranch &&(this.trainingType && this.trainingType!="alltypes") && this.levels.length>0) {
    console.log('5')
    return function(training){
    return training.concernedBranches.includes(this.activeBranch) && this.levels.includes(training.level) && 
    training.type==this.trainingType 
    }

  //only 2 filters are active

  }else if(this.activeBranch &&(this.trainingType && this.trainingType!="alltypes")){
    console.log('6')
    return function(training){
   return training.concernedBranches.includes(this.activeBranch) && training.type==this.trainingType
    }

  }else if(this.levels.length>0 &&this.searchValue.length>0){
    console.log('7')
    return function(training){
    return training.type==this.trainingType && training.title.includes(this.searchValue)
    }

  }else if(this.activeBranch  && this.levels.length>0){
    console.log('8')
    return function(training){
   return training.concernedBranches.includes(this.activeBranch) && this.levels.includes(training.level)
    }

  }else if((this.trainingType && this.trainingType!="alltypes") &&  this.searchValue.length>0){
    console.log('9')
    return function(training){
    return  training.type==this.trainingType && training.title.includes(this.searchValue)
    }

  }else if(this.activeBranch  &&this.searchValue.length>0){
    console.log('10')
    return function(training){
    return training.concernedBranches.includes(this.activeBranch) && training.title.includes(this.searchValue)
    }

  }else if((this.trainingType && this.trainingType!="alltypes")&& this.levels.length>0 ){
    console.log('11')
    return function(training){
    return this.levels.includes(training.level) && training.type==this.trainingType 
    }
//only 1 filters are active
 
  }else if(this.activeBranch){
    console.log('12')
    return function(training){
    return training.concernedBranches.includes(this.activeBranch)
    }

  }else if (this.trainingType && this.trainingType!="alltypes" ){
    console.log('13')
    return function(training){
    return training.type==this.trainingType 
    }

  }else if(this.levels.length>0){
    console.log('14')
    return function(training){
    return this.levels.includes(training.level)
    }

  }else if(this.searchValue.length>0){
    console.log('15')
    return function(training){
    return training.title.includes(this.searchValue)
    }

  }else  {
    console.log('16')
    return function(training){
    return true
    }
  }

}
*/

}
