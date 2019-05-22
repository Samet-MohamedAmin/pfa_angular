import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule} from '@angular/material';
import { LoginService } from './login/login-service.service';
import { AuthenticationService } from './auth/authentication.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared/shared.service';
import { AdminGuardService } from './auth/admin-guard.service';
import { AchievementsModule } from './achievements/achievements.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from '@4c-shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { TrainingModule } from './training/training.module';


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,

      SharedModule,
      CoreModule,
      
      HomeModule,
      AchievementsModule,
      ProfileModule,
      AdminModule,
      LoginModule,
      TrainingModule,
      AppRoutingModule,

      MatSidenavModule,
      MatListModule,
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
