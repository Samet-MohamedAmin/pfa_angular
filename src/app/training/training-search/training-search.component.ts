import { Component, OnInit } from '@angular/core';
import { BRANCHES, BRANCH_LIST } from 'src/app/shared/shared.service';
import { TRAINING_TYPE_LIST } from '../training.interface';

@Component({
  selector: 'app-training-search',
  templateUrl: './training-search.component.html',
  styleUrls: ['./training-search.component.css']
})
export class TrainingSearchComponent implements OnInit {

  searchValue = '';

  parameters = {
    levels: ['debutant', 'intermediare', 'avancé'],
    types: TRAINING_TYPE_LIST,
    branches: BRANCHES,
    branchList: BRANCH_LIST,
  }

  constructor() { }

  ngOnInit() {
  }

}
