import { Component, OnInit, Input,EventEmitter,Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';

@Component({
  selector: 'app-training-create-description',
  templateUrl: './training-create-description.component.html',
  styleUrls: ['./training-create-description.component.css']
})
export class TrainingCreateDescriptionComponent implements OnInit {
  @Output() imageEmitter =new EventEmitter<any>();
  @Input() formGroupDescription: FormGroup;
  @Input() formFieldAppearance: MatFormFieldAppearance;

  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event){
  this.imageEmitter.emit(event.target.files[0])
  }

}
