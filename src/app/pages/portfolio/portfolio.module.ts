import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioModernTwoComponent } from './portfolio-modern-two/portfolio-modern-two.component';
import { PortfolioModernThreeComponent } from './portfolio-modern-three/portfolio-modern-three.component';
import { PortfolioModernFourComponent } from './portfolio-modern-four/portfolio-modern-four.component';
import { PortfolioModernFiveComponent } from './portfolio-modern-five/portfolio-modern-five.component';
import { PortfolioModernSixComponent } from './portfolio-modern-six/portfolio-modern-six.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioModernTwoComponent,
    PortfolioModernThreeComponent,
    PortfolioModernFourComponent,
    PortfolioModernFiveComponent,
    PortfolioModernSixComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
