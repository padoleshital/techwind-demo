import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanysComponent } from './companys.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  { path: '',
    component:LayoutComponent,
    children:[
      {
        path:'aboutus', component:AboutusComponent
      },
      {
        path:'service',component:ServiceComponent
      },
      {
        path:'team',component:TeamComponent
      },
      {
        path:'pricing', component:PricingComponent
      },
      {
        path:'testimonal', component:TestimonialComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanysRoutingModule { }
