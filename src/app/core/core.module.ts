import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
