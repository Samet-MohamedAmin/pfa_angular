import { Component, OnInit } from '@angular/core';
import { BRANCHES, BRANCH_LIST } from 'src/app/shared/shared.service';
import { TRAINING_TYPE_LIST, TRAINING_LEVEL } from '../training.interface';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training-search',
  templateUrl: './training-search.component.html',
  styleUrls: ['./training-search.component.css']
})
export class TrainingSearchComponent implements OnInit {
  searchValue = '';

  parameters = {
    levels: TRAINING_LEVEL,
    types: TRAINING_TYPE_LIST,
    branches: BRANCHES,
    branchList: BRANCH_LIST,
  }
//binded properties
 activeBranch;
 levels:Array<any>=[];
 trainingType;
  
 allTrainings;
 filteredTrainings;

  constructor(private route :ActivatedRoute, private trainingService:TrainingService) { 
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
    this.filterTrainings()
     })
    })
  
   
  }

  ngOnInit() {
  }

  levelAdded(event){
console.log(event)
this.levels.push(event.source.value)
this.filterTrainings()
  }


  filterTrainings() {
    
    this.filteredTrainings=this.allTrainings.filter((training:any)=>{
      var condition;

      //all 4 filters are active
      if(this.activeBranch &&(this.trainingType!="alltypes") && this.levels.length>0 &&this.searchValue.length>0){
         condition= training.concernedBranches.includes(this.activeBranch) && this.levels.includes(training.level) && training.type==this.trainingType && training.title.includes(this.searchValue)


      //only 3 filters are active
      }else if((this.trainingType!="alltypes") && this.levels.length>0 &&this.searchValue.length>0 ){
      condition=this.levels.includes(training.level) && training.type==this.trainingType && training.title.includes(this.searchValue)

      } else if( this.activeBranch && this.levels.length>0 && this.searchValue.length>0 ){
        condition= training.concernedBranches.includes(this.activeBranch) && this.levels.includes(training.level) && training.title.includes(this.searchValue)
      } else if(this.activeBranch &&(this.trainingType!="alltypes")  &&this.searchValue.length>0){
        condition= training.concernedBranches.includes(this.activeBranch)  && training.type==this.trainingType && training.title.includes(this.searchValue)
      
      }else if(this.activeBranch &&(this.trainingType!="alltypes") && this.levels.length>0) {
        condition= training.concernedBranches.includes(this.activeBranch) && this.levels.includes(training.level) && 
        training.type==this.trainingType 


      //only 2 filters are active
    
      }else if(this.activeBranch &&(this.trainingType!="alltypes")){
        condition= training.concernedBranches.includes(this.activeBranch) && this.levels.includes(training.level)

      }else if(this.levels.length>0 &&this.searchValue.length>0){
        condition =training.type==this.trainingType && training.title.includes(this.searchValue)

      }else if(this.activeBranch  && this.levels.length>0){
        condition= training.concernedBranches.includes(this.activeBranch) && this.levels.includes(training.level)

      }else if((this.trainingType!="alltypes") &&  this.searchValue.length>0){
        condition=  training.type==this.trainingType && training.title.includes(this.searchValue)

      }else if(this.activeBranch  &&this.searchValue.length>0){
     condition= training.concernedBranches.includes(this.activeBranch) && training.title.includes(this.searchValue)

      }else if((this.trainingType!="alltypes") && this.levels.length>0 ){
        condition=  this.levels.includes(training.level) && training.type==this.trainingType 

    //only 1 filters are active
     
      }else if(this.activeBranch){
        condition= training.concernedBranches.includes(this.activeBranch)

      }else if (this.trainingType!="alltypes"){
      condition=training.type==this.trainingType 

      }else if(this.levels){
        condition=this.levels.includes(training.level)

      }else if(this.searchValue.length>0){
        condition =training.title.includes(this.searchValue)
      }

      return condition
    })
    
  }

}
