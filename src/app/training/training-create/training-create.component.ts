import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';
import { TrainingType, TrainingItemInterface } from '../training.interface';
import { TrainingService } from '../training.service';
import { Router } from '@angular/router';

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
  trainingImage = null;
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private trainingService: TrainingService , private router: Router) { }

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
      level: ['', Validators.required],
      tags: [[], Validators.required],
      requirements: ['', Validators.required],
      concernedBranches: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.formGroupDescription = this._formBuilder.group({
      goals: ['', Validators.required],
      briefDescription: ['', Validators.required],
      detailedDescription: ['', Validators.required],
    });
  }
  updateImage(image) {
  this.trainingImage = image;
  }
  getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }

  prepareData() {
    this.training = {
      ...this.formGroupGeneral.value,
      ...this.formGroupSpecifications.value,
      ...this.formGroupDescription.value
    };
    console.log(this.training);
  }

  submit() {
    this.prepareData();
    console.log(this.training);
    const formData = this.getFormData(this.training);
    formData.append('courseImage', this.trainingImage);
    this.trainingService.addTraining(formData)
    .subscribe((course: any) => {
      console.log(course);
      if (course._id) {
        this.router.navigate(['training/details/', course._id]);
      }
    });
  }

  testFirstStep() {
    // console.log(this.formGroupGeneral.controls.title.errors.length > 0);
  }

}
