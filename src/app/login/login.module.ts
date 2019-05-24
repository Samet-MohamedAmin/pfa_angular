import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpSelectionComponent } from './sign-up/sign-up-selection/sign-up-selection.component';
import { SignInSelectionComponent } from './sign-in/sign-in-selection/sign-in-selection.component';
import { MatCardModule, MatFormFieldModule, MatDatepickerModule, MatSelectModule, MatInputModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
  ],
  declarations: [
    SignUpSelectionComponent,
    SignInSelectionComponent,
    SignUpComponent,
    SignInComponent,
  ],

})
export class LoginModule { }
