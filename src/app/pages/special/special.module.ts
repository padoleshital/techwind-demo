import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialRoutingModule } from './special-routing.module';
import { SpecialComponent } from './special.component';
import { PageComingsoonComponent } from './page-comingsoon/page-comingsoon.component';
import { PageMaintenanceComponent } from './page-maintenance/page-maintenance.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { PageThankyouComponent } from './page-thankyou/page-thankyou.component';


@NgModule({
  declarations: [
    SpecialComponent,
    PageComingsoonComponent,
    PageMaintenanceComponent,
    PageErrorComponent,
    PageThankyouComponent
  ],
  imports: [
    CommonModule,
    SpecialRoutingModule
  ]
})
export class SpecialModule { }
