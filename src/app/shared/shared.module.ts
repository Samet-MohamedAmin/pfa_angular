import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImagePipe } from '@4c-shared/pipes/background-image.pipe';

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
