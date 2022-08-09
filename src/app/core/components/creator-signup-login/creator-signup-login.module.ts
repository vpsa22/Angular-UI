import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/common/material/material.module';
import { SignupComponent } from './components/signup/signup.component';
import { CreatorSignupLoginRoutingModule } from './creator-signup-login-routing.module';
import { LoginComponent } from './components/login/login.component';


//removed CreatorSignupLoginComponent,SignupComponent, LoginComponent from declaration
// from imports CreatorSignupLoginRoutingModule
@NgModule({
  declarations: [SignupComponent,LoginComponent],
  imports: [
    CommonModule, MaterialModule, CreatorSignupLoginRoutingModule
  ]
})
export class CreatorSignupLoginModule { }
