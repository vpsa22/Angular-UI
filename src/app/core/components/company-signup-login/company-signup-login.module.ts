import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/common/material/material.module';
import { CompanySignupLoginRoutingModule } from './company-signup-login-routing.module';
import { CompanySignupComponent } from './components/company-signup/company-signup.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { CompanySignupLoginComponent } from './company-signup-login.component';


//CompanySignupLoginComponent,CompanySignupComponent,CompanyLoginComponent removed
//CompanySignupLoginModulefrom import
@NgModule({
  declarations: [CompanySignupLoginComponent, CompanySignupComponent,CompanyLoginComponent],
  imports: [
    CommonModule,MaterialModule, CompanySignupLoginRoutingModule
  ]
})
export class CompanySignupLoginModule { }

