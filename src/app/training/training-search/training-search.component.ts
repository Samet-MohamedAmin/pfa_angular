import { Component, OnInit } from '@angular/core';
import { BRANCHES, BRANCH_LIST } from '../training.service';

@Component({
  selector: 'app-training-search',
  templateUrl: './training-search.component.html',
  styleUrls: ['./training-search.component.css']
})
export class TrainingSearchComponent implements OnInit {

  parameters = {
    levels: ['debutant', 'intermediare', 'expert'],
    types: ['theorique', 'technique', 'soft-skill'],
    branches: BRANCHES,
    branchList: BRANCH_LIST,
  }

  constructor() { }

  ngOnInit() {
  }

}
