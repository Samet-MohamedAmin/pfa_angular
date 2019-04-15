import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';
import { TrainingType, TrainingItemInterface } from '../training.interface';

@Component({
  selector: 'app-training-create',
  templateUrl: './training-create.component.html',
  styleUrls: ['./training-create.component.css']
})
export class TrainingCreateComponent implements OnInit {
  formFieldAppearance: MatFormFieldAppearance = 'standard';
  formGroupGeneral: FormGroup;
  formGroupSpecifications: FormGroup;
  formGroupDescription: FormGroup;

  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

  training: TrainingItemInterface;

  ngOnInit() {
    this.formGroupGeneral = this._formBuilder.group({
      title: ['', Validators.required],
      instructor: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      // TODO: specify min/max value
      totalHours: ['', Validators.required],
      totalPlaces: ['', Validators.required],
    });
    this.formGroupSpecifications = this._formBuilder.group({
      levels: ['', Validators.required],
      requirements: ['', Validators.required],
      branches: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.formGroupDescription = this._formBuilder.group({
      goals: ['', Validators.required],
      descriptionShort: ['', Validators.required],
      descriptionDetailed: ['', Validators.required],
    });
  }

  prepareData(){
    this.training = {
      ...this.formGroupGeneral.value,
      ...this.formGroupSpecifications.value,
      ...this.formGroupDescription.value
    }

  }

  submit(){
    this.prepareData();
    console.log(this.training);
  }

  testFirstStep(){
    // console.log(this.formGroupGeneral.controls.title.errors.length > 0);
  }

}
