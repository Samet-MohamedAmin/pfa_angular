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
import { SignInStudentComponent } from './login/sign-in/sign-in-student/sign-in-student.component';
import { SignInTeacherComponent } from './login/sign-in/sign-in-teacher/sign-in-teacher.component';
import { SignInAdminComponent } from './login/sign-in/sign-in-admin/sign-in-admin.component';
import { SignUpSelectionComponent } from './login/sign-up/sign-up-selection/sign-up-selection.component';
import { SignUpStudentComponent } from './login/sign-up/sign-up-student/sign-up-student.component';
import { SignUpTeacherComponent } from './login/sign-up/sign-up-teacher/sign-up-teacher.component';
import { SignInSelectionComponent } from './login/sign-in/sign-in-selection/sign-in-selection.component';
import { SignUpAdminComponent } from './login/sign-up/sign-up-admin/sign-up-admin.component';


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
      SignInStudentComponent,
      SignInTeacherComponent,
      SignInAdminComponent,
      SignUpComponent,
      SignUpSelectionComponent,
      SignUpStudentComponent,
      SignUpTeacherComponent,
      SignUpAdminComponent
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
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
