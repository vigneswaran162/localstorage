import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexpageComponent } from './indexpage/indexpage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ClubmanComponent } from './clubman/clubman.component';
import { SlideComponent } from './slide/slide.component';
import { ManagementComponent } from './about/management/management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { ProductsComponent } from './products/products.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexpageComponent,
    LoginComponent,
    SignupComponent,
    ClubmanComponent,
    SlideComponent,
    ManagementComponent,
    NavbarComponent,
    FooterComponent,
    TeamComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule ,
    MatDatepickerModule,
    MatFormFieldModule,
   
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    })
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
