import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { MaterialModule } from 'src/app/common/material/material.module';

import { LandingComponent } from './landing.component';
import { LandingLeftComponent } from './components/landing-left/landing-left.component';
import { LandingRightComponent } from './components/landing-right/landing-right.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { ReviewComponent } from '../review/review.component';
import { SliderComponent } from 'src/app/common/components/slider/slider.component';


@NgModule({
  declarations: [LandingComponent,LandingLeftComponent, LandingRightComponent, CompanyDetailsComponent, ReviewComponent,SliderComponent],
  imports: [
    CommonModule,LandingRoutingModule, MaterialModule
  ]
})
export class LandingModule { }
