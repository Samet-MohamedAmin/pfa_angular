import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImagePipe } from 'app/pipes/background-image.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BackgroundImagePipe,
  ],
  exports: [
    BackgroundImagePipe
  ]
})
export class SharedModule { }
