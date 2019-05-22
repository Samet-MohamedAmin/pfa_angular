import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingRequestsComponent } from './training-requests/training-requests.component';

const routes: Routes = [
  {path: 'admin', children: [
    {path: '', redirectTo: 'training-requests', pathMatch: 'full'},
    {path: 'training-requests', component: TrainingRequestsComponent} //,canActivate:[AdminGuardService]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
