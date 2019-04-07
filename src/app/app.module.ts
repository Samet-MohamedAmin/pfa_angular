import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { MatToolbarModule, MatIconModule, MatGridListModule, MatDividerModule,
  MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatSidenavModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BranchListComponent } from './home/branch-list/branch-list.component';
import { BranchItemComponent } from './home/branch-item/branch-item.component';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent,
      HomeComponent,
      BranchListComponent,
      BranchItemComponent
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
      MatSidenavModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
