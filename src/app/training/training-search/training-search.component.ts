import { Component, OnInit } from '@angular/core';
import { BRANCHES, BRANCH_LIST, IMAGES, SharedService, IMAGE_SRC_BASE } from '@4c-shared/shared.service';
import { TRAINING_TYPE_LIST, TRAINING_LEVEL, TrainingItemInterface } from '../training.interface';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from '../training.service';
@Component({
  selector: 'app-training-search',
  templateUrl: './training-search.component.html',
  styleUrls: ['./training-search.component.css']
})
export class TrainingSearchComponent implements OnInit {

  trainingList:Array<any>=[];  
  
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

  constructor(private route :ActivatedRoute,
              private trainingService:TrainingService) { 
    this.trainingService.getAllTrainings()
    .subscribe((trainings:any[]) =>{
      
      this.trainingList=trainings
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
   * than title like __description__ or __instructor__.
   * You can specify training concerned attributes in `list`
   * @param training training item in filter training callback
   */
  filterSearch(training:TrainingItemInterface):boolean {
    const list: string[] = ['title', 'instructor']
    
    if(!this.searchValue.length) return true;
    
    for(let i in list)
      if(training[list[i]].toLowerCase().includes(this.searchValue.toLowerCase()))
        return true;

    return false;
  }

  /**
   * filter trainig list result when any filter attributes changes
   */
  filterTrainings() {
    console.log('--------> filter trainings');
    this.filteredTrainings=this.trainingList.filter((training:TrainingItemInterface)=>{
      if(!this.trainingType || (this.trainingType == training.type) || (this.trainingType=='all'))
        if(!this.activeBranch || training.concernedBranches[0].includes(this.activeBranch))
          // TODO: course model level attribute must be integer
          if(!this.levels.length || this.levels.includes(+training.level))
            if(this.filterSearch(training))
              return true
      return false;
    })
    
  }


}
