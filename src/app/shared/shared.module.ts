import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatnersComponent } from './patners/patners.component';
import { CompanyLogoComponent } from './company-logo/company-logo.component';
import { AmazingPartnersComponent } from './amazing-partners/amazing-partners.component';
import { ConfortableRatesComponent } from './confortable-rates/confortable-rates.component';

import { AvalSmartphonesComponent } from './aval-smartphones/aval-smartphones.component';
import { UserSaysComponent } from './user-says/user-says.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { Slider1Component } from './slider1/slider1.component';
import { Slider2Component } from './slider2/slider2.component';
import { SingleImageSliderComponent } from './single-image-slider/single-image-slider.component';

@NgModule({
  declarations: [
    PatnersComponent,
    CompanyLogoComponent,
    AmazingPartnersComponent,
    ConfortableRatesComponent,
    Slider1Component,
    AvalSmartphonesComponent,
    UserSaysComponent,
    WhatWeDoComponent,
    SwitcherComponent,
    Slider2Component,
    SingleImageSliderComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PatnersComponent,
    CompanyLogoComponent,
    AmazingPartnersComponent,
    ConfortableRatesComponent,
    Slider1Component,
    AvalSmartphonesComponent,
    UserSaysComponent,
    WhatWeDoComponent,
    Slider2Component,
    SingleImageSliderComponent
  ]
})
export class SharedModule { }
