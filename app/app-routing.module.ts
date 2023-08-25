import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ClubmanComponent } from './clubman/clubman.component';
import { SlideComponent } from './slide/slide.component';
import { AuthGuard } from './auth.guard';
import { ManagementComponent } from './about/management/management.component';
import { TeamComponent } from './team/team.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'',
    component:IndexpageComponent
  },{
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },{
    path:'index',
    component:ClubmanComponent,
    canActivate:[AuthGuard]
  },{
    path:'slide',
    component:SlideComponent
  },
  {
    path:'Management',
    component:ManagementComponent
  },{
    path:'Home',
    component:ClubmanComponent
  },{
    path:'Team',
    component:TeamComponent
  },{
    path:'Products',
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
