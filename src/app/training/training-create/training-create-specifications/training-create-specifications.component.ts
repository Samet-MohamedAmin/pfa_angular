import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';

@Component({
  selector: 'app-training-create-specifications',
  templateUrl: './training-create-specifications.component.html',
  styleUrls: ['./training-create-specifications.component.css']
})
export class TrainingCreateSpecificationsComponent implements OnInit {
  @Input() formGroupSpecifications: FormGroup;
  @Input() formFieldAppearance: MatFormFieldAppearance;

  constructor() { }

  ngOnInit() {
  }

}
