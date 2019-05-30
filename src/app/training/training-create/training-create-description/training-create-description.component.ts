import { Component, Input,EventEmitter,Output, ViewChild, ElementRef} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';

@Component({
  selector: 'app-training-create-description',
  templateUrl: './training-create-description.component.html',
  styleUrls: ['./training-create-description.component.css']
})
export class TrainingCreateDescriptionComponent {
  @Output() imageEmitter =new EventEmitter<any>();
  @Input() formGroupDescription: FormGroup;
  @Input() formFieldAppearance: MatFormFieldAppearance;

  @ViewChild('inputImageContainer') inputImageContainer: ElementRef;

  constructor() { }

  onFileSelected(event){
    const image:any = event.target.files[0];
    const imageSrc = URL.createObjectURL(image);
    this.inputImageContainer.nativeElement.style.backgroundImage = `url(${imageSrc})`;
    console.log(imageSrc)
    this.imageEmitter.emit(image);
  }

}
