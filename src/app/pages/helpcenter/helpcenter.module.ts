import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpcenterRoutingModule } from './helpcenter-routing.module';
import { HelpcenterComponent } from './helpcenter.component';
import { HelpcentreFaqComponent } from './helpcentre-faq/helpcentre-faq.component';
import { HelpcentreGuidesComponent } from './helpcentre-guides/helpcentre-guides.component';
import { HelpcentreSupportComponent } from './helpcentre-support/helpcentre-support.component';


@NgModule({
  declarations: [
    HelpcenterComponent,
    HelpcentreFaqComponent,
    HelpcentreGuidesComponent,
    HelpcentreSupportComponent
  ],
  imports: [
    CommonModule,
    HelpcenterRoutingModule
  ]
})
export class HelpcenterModule { }
