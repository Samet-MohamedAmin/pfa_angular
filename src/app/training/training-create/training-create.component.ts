import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';

@Component({
  selector: 'app-training-create',
  templateUrl: './training-create.component.html',
  styleUrls: ['./training-create.component.css']
})
export class TrainingCreateComponent implements OnInit {
  formFieldAppearance: MatFormFieldAppearance = 'standard';
  formGroupGeneral: FormGroup;
  formGroupSpecifications: FormGroup;
  formGroupDescription: FormGroup

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroupGeneral = this._formBuilder.group({});
    this.formGroupSpecifications = this._formBuilder.group({});
    this.formGroupDescription = this._formBuilder.group({});
  }


}
