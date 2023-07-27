import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassicPortfolioRoutingModule } from './classic-portfolio-routing.module';
import { ClassicPortfolioComponent } from './classic-portfolio.component';
import { PortfolioClassicTwoComponent } from './portfolio-classic-two/portfolio-classic-two.component';
import { PortfolioClassicThreeComponent } from './portfolio-classic-three/portfolio-classic-three.component';
import { PortfolioClassicFourComponent } from './portfolio-classic-four/portfolio-classic-four.component';
import { PortfolioClassicFiveComponent } from './portfolio-classic-five/portfolio-classic-five.component';
import { PortfolioClassicSixComponent } from './portfolio-classic-six/portfolio-classic-six.component';


@NgModule({
  declarations: [
    ClassicPortfolioComponent,
    PortfolioClassicTwoComponent,
    PortfolioClassicThreeComponent,
    PortfolioClassicFourComponent,
    PortfolioClassicFiveComponent,
    PortfolioClassicSixComponent
  ],
  imports: [
    CommonModule,
    ClassicPortfolioRoutingModule
  ]
})
export class ClassicPortfolioModule { }
