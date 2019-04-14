import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';

@Component({
  selector: 'app-training-create-general',
  templateUrl: './training-create-general.component.html',
  styleUrls: ['./training-create-general.component.css']
})
export class TrainingCreateGeneralComponent implements OnInit {
  @Input() formGroupGeneral: FormGroup;
  @Input() formFieldAppearance: MatFormFieldAppearance;

  constructor() { }

  ngOnInit() {}

}
