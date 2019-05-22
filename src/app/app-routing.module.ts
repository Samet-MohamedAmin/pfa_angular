import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignUpSelectionComponent } from './login/sign-up/sign-up-selection/sign-up-selection.component';
import { SignInSelectionComponent } from './login/sign-in/sign-in-selection/sign-in-selection.component';
import { ErrorComponent } from './core/error/error.component';
import { TrainingSearchComponent } from './training/training-search/training-search.component';
import { TrainingDetailsComponent } from './training/training-details/training-details.component';
import { TrainingCreateComponent } from './training/training-create/training-create.component';
import { TrainingRecommandationsComponent } from './training/training-recommandations/training-recommandations.component';
import { TrainingRequestsComponent } from './admin/training-requests/training-requests.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AdminGuardService } from './auth/admin-guard.service';
import { ProfileTrainingRequestsComponent } from './profile/profile-training-requests/profile-training-requests.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'achievements', pathMatch: 'full'},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
