import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';

@Component({
  selector: 'app-training-create-description',
  templateUrl: './training-create-description.component.html',
  styleUrls: ['./training-create-description.component.css']
})
export class TrainingCreateDescriptionComponent implements OnInit {
  @Input() formGroupDescription: FormGroup;
  @Input() formFieldAppearance: MatFormFieldAppearance;

  constructor() { }

  ngOnInit() {
  }

}
