import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { MatToolbarModule, MatIconModule, MatGridListModule, MatDividerModule,
  MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatSidenavModule,
  MatOptionModule, MatSelectModule, MatMenuModule, MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BranchListComponent } from './home/branch-list/branch-list.component';
import { BranchItemComponent } from './home/branch-item/branch-item.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignUpSelectionComponent } from './login/sign-up/sign-up-selection/sign-up-selection.component';
import { SignInSelectionComponent } from './login/sign-in/sign-in-selection/sign-in-selection.component';
import { ErrorComponent } from './error/error.component';
import { LoginService } from './login/login-service.service';
import { AuthenticationService } from './auth/authentication.service';
import { AuthGuardService } from './auth/auth-guard.service';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent,
      HomeComponent,
      BranchListComponent,
      BranchItemComponent,
      SignInComponent,
      SignInSelectionComponent,
      SignUpComponent,
      SignUpSelectionComponent,
      ErrorComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      MatToolbarModule,
      MatIconModule,
      MatGridListModule,
      MatDividerModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatCardModule,
      MatSidenavModule,
      MatOptionModule,
      MatSelectModule,
      MatMenuModule,
      MatListModule
   ],
   providers: [
      LoginService,
      AuthGuardService,
      AuthenticationService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
