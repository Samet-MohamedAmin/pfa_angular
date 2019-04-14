import { Component, OnInit } from '@angular/core';
import { BRANCHES, BRANCH_LIST } from '../training.service';
import { TRAINING_TYPE } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-training-search',
  templateUrl: './training-search.component.html',
  styleUrls: ['./training-search.component.css']
})
export class TrainingSearchComponent implements OnInit {

  searchValue = '';

  parameters = {
    levels: ['debutant', 'intermediare', 'avancé'],
    types: TRAINING_TYPE,
    branches: BRANCHES,
    branchList: BRANCH_LIST,
  }

  constructor() { }

  ngOnInit() {
  }

}
