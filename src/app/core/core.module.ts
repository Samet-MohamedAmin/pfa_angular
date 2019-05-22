import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

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
