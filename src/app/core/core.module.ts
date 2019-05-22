import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';
import { ErrorComponent } from './error/error.component';


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
    ErrorComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
