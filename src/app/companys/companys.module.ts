import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanysRoutingModule } from './companys-routing.module';
import { CompanysComponent } from './companys.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


@NgModule({
  declarations: [
    CompanysComponent,
    AboutusComponent,
    ServiceComponent,
    TeamComponent,
    PricingComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    CompanysRoutingModule
  ]
})
export class CompanysModule { }
