import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { CompanySignupLoginComponent } from '../company-signup-login/company-signup-login.component';
import { LoginComponent } from '../creator-signup-login/components/login/login.component';
import { SignupComponent } from '../creator-signup-login/components/signup/signup.component';
import { ReviewComponent } from '../review/review.component';
import { LandingComponent } from './landing.component';



const routes: Routes = [
    {
       path: '',
       component:LandingComponent,
       //loadChildren : () => import ('src/app/core/components/landing/landing.module').then(m => m.LandingModule)    
     },
     {
      path: 'creator',
      loadChildren : () => import ('src/app/core/components/creator-signup-login/creator-signup-login.module').then(m => m.CreatorSignupLoginModule)    
    },
   {
     path: 'login',
     component: LoginComponent   
   }, 
   {
    path: 'signup',
    component: SignupComponent   
  },
  {
    path: 'company',
    component: CompanySignupLoginComponent,
    loadChildren : () => import ('src/app/core/components/company-signup-login/company-signup-login.module').then(m => m.CompanySignupLoginModule)       
  },
  {
    path: 'company-login',
    component: CompanySignupLoginComponent   
  }, 
  {
   path: 'company-signup',
   component: CompanySignupLoginComponent   
 },
  {
    path: 'company-details',
    component: CompanyDetailsComponent,
   // loadChildren : () => import ('src/app/core/components/company-details/company-details.module').then(m => m.CompanyDetailsModule)       
  },

  {
    path: 'review',
    component: ReviewComponent,
    //loadChildren : () => import ('src/app/core/components/company-details/company-details.module').then(m => m.CompanyDetailsModule)       
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class LandingRoutingModule { }
