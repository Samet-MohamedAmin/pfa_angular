import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { MatToolbarModule, MatIconModule, MatGridListModule, MatDividerModule,
  MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatSidenavModule,
  MatOptionModule, MatSelectModule, MatMenuModule, MatListModule, MatCheckboxModule,
  MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatStepperModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TrainingSearchComponent } from './training/training-search/training-search.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainingListComponent } from './training/training-list/training-list.component';
import { TrainingItemComponent } from './training/training-item/training-item.component';
import { SharedService } from './shared/shared.service';
import { TrainingDetailsComponent } from './training/training-details/training-details.component';
import { TrainingCreateComponent } from './training/training-create/training-create.component';
import { TrainingCreateGeneralComponent } from './training/training-create/training-create-general/training-create-general.component';
import { TrainingCreateSpecificationsComponent } from './training/training-create/training-create-specifications/training-create-specifications.component';
import { TrainingCreateDescriptionComponent } from './training/training-create/training-create-description/training-create-description.component';
import { TrainingRecommandationsComponent } from './training/training-recommandations/training-recommandations.component';
import { TrainingRequestsComponent } from './admin/training-requests/training-requests.component';
import { AdminGuardService } from './auth/admin-guard.service';
import { TrainingRequestStudentComponent } from './admin/training-requests/training-request-student/training-request-student.component';
import { BackgroundImagePipe } from './pipes/background-image.pipe';
import { ProfileComponent } from './profile/profile.component';
import { AchievementsModule } from './achievements/achievements.module';
import { ProfileModule } from './profile/profile.module';


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
      
      TrainingSearchComponent,
      TrainingListComponent,
      TrainingItemComponent,
      TrainingDetailsComponent,
      TrainingCreateComponent,
      TrainingCreateGeneralComponent,
      TrainingCreateSpecificationsComponent,
      TrainingCreateDescriptionComponent,
      TrainingRecommandationsComponent,
      
      TrainingRequestsComponent,
      TrainingRequestStudentComponent,
      

      ErrorComponent,

      BackgroundImagePipe,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      
      AchievementsModule,
      ProfileModule,
      AppRoutingModule,

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
      MatListModule,
      MatCheckboxModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatStepperModule
   ],
   providers: [
      LoginService,
      SharedService,
      AuthGuardService,
      AuthenticationService,
      AdminGuardService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
