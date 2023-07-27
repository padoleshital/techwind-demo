import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityRoutingModule } from './utility-routing.module';
import { UtilityComponent } from './utility.component';
import { PageTermsComponent } from './page-terms/page-terms.component';
import { PagePrivacyComponent } from './page-privacy/page-privacy.component';


@NgModule({
  declarations: [
    UtilityComponent,
    PageTermsComponent,
    PagePrivacyComponent
  ],
  imports: [
    CommonModule,
    UtilityRoutingModule
  ]
})
export class UtilityModule { }
