import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingSearchComponent } from './training-search/training-search.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingCreateComponent } from './training-create/training-create.component';
import { TrainingRecommandationsComponent } from './training-recommandations/training-recommandations.component';
import { AuthGuardService } from '@4c-auth/auth-guard.service';

const routes: Routes = [
  {path: 'training' ,children: [
    {path: '', redirectTo: 'search', pathMatch: 'full'},
    {path: 'search', component: TrainingSearchComponent},
    {path: 'details/:id', component: TrainingDetailsComponent},
    {path: 'create', component: TrainingCreateComponent}, //canActivate:[AdminGuardService]},
    {path:'recommendations' , component: TrainingRecommandationsComponent ,canActivate:[AuthGuardService]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
