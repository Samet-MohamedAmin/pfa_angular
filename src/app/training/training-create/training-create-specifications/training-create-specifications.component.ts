import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance, MatChipInputEvent } from '@angular/material';
import { TRAINING_TYPE_LIST, TRAINING_LEVEL } from '../../training.interface';
import { BRANCHES } from '@4c-shared/shared.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-training-create-specifications',
  templateUrl: './training-create-specifications.component.html',
  styleUrls: ['./training-create-specifications.component.css']
})
export class TrainingCreateSpecificationsComponent implements OnInit {
  @Input() formGroupSpecifications: FormGroup;
  @Input() formFieldAppearance: MatFormFieldAppearance;
  trainingTypeList = TRAINING_TYPE_LIST;
  trainingType = TRAINING_TYPE_LIST[0];
  branches = BRANCHES;
  levels = TRAINING_LEVEL;
  tags: any[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit() {
    this.formGroupSpecifications.controls.type.setValue(TRAINING_TYPE_LIST[0]);
    this.formGroupSpecifications.controls.tags.setValue(this.tags);
  }

  onChangeType(eventData) {
    this.formGroupSpecifications.controls.type.setValue(eventData.value);
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
