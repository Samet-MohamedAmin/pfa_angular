import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchItemComponent } from './branch-item/branch-item.component';
import { MatFormFieldModule, MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatInputModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    HomeComponent,
    BranchListComponent,
    BranchItemComponent,
  ],

})
export class HomeModule { }
