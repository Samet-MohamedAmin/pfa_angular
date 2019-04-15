import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';
import { TRAINING_TYPE_LIST, TRAINING_LEVEL } from '../../training.interface';
import { BRANCHES } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-training-create-specifications',
  templateUrl: './training-create-specifications.component.html',
  styleUrls: ['./training-create-specifications.component.css']
})
export class TrainingCreateSpecificationsComponent implements OnInit {
  @Input() formGroupSpecifications: FormGroup;
  @Input() formFieldAppearance: MatFormFieldAppearance;
  trainingTypeList = TRAINING_TYPE_LIST;
  branches = BRANCHES;
  levels = TRAINING_LEVEL;

  constructor() { }

  ngOnInit() {
  }

}