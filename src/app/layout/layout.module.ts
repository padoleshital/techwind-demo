import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarleftComponent } from './navbarleft/navbarleft.component';
import { FeatherModule } from 'angular-feather';
import { CentrelayoutComponent } from './centrelayout/centrelayout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftnavbarlayoutComponent } from './leftnavbarlayout/leftnavbarlayout.component';
import { RightnavbarlayoutComponent } from './rightnavbarlayout/rightnavbarlayout.component';
import { RightnavbarComponent } from './rightnavbar/rightnavbar.component';
import { RightfooterComponent } from './rightfooter/rightfooter.component';
import { SharedModule } from '../shared/shared.module';
import { NavlightcentreComponent } from './navlightcentre/navlightcentre.component';
import { NavlightcentrelayoutComponent } from './navlightcentrelayout/navlightcentrelayout.component';
import { CookiesComponent } from './cookies/cookies.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { LeftlayoutComponent } from './leftlayout/leftlayout.component';
import { LeftnavbarComponent } from './leftnavbar/leftnavbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    FooterComponent,
    NavbarleftComponent,
    CentrelayoutComponent,
    NavbarComponent,
    LeftnavbarlayoutComponent,
    RightnavbarlayoutComponent,
    RightnavbarComponent,
    RightfooterComponent,
    NavlightcentreComponent,
    NavlightcentrelayoutComponent,
    CookiesComponent,
    SwitcherComponent,
    LeftlayoutComponent,
    LeftnavbarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FeatherModule,
    SharedModule
  ]
  
})
export class LayoutModule { }
