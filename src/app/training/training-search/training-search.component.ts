import { Component, OnInit } from '@angular/core';
import { BRANCHES, BRANCH_LIST } from 'src/app/shared/shared.service';
import { TRAINING_TYPE_LIST, TRAINING_LEVEL } from '../training.interface';

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

  constructor() { }

  ngOnInit() {
  }

}
