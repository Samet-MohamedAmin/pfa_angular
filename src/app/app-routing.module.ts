import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // TODO: fix redirect to external site
  // {path: 'docs', redirectTo: 'https://4c-docs.netlify.com/'},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
