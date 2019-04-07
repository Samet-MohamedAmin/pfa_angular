import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpSelectionComponent, pathMatch: 'full'},
  {path: 'sign-up', component: SignUpComponent,
    children: [
      {path: 'student', component: SignUpStudentComponent},
      {path: 'teacher', component: SignUpTeacherComponent},
      {path: 'admin', component: SignUpAdminComponent}
    ]},
  {path: 'sign-in', component: SignInSelectionComponent, pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent,
    children: [
      {path: 'student', component: SignInStudentComponent},
      {path: 'teacher', component: SignInTeacherComponent},
      {path: 'admin', component: SignInAdminComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
