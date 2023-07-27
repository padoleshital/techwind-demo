import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreativePortfolioRoutingModule } from './creative-portfolio-routing.module';
import { CreativePortfolioComponent } from './creative-portfolio.component';
import { PortfolioCreativeTwoComponent } from './portfolio-creative-two/portfolio-creative-two.component';
import { PortfolioCreativeThreeComponent } from './portfolio-creative-three/portfolio-creative-three.component';
import { PortfolioCreativeFourComponent } from './portfolio-creative-four/portfolio-creative-four.component';
import { PortfolioCreativeFiveComponent } from './portfolio-creative-five/portfolio-creative-five.component';
import { PortfolioCreativeSixComponent } from './portfolio-creative-six/portfolio-creative-six.component';


@NgModule({
  declarations: [
    CreativePortfolioComponent,
    PortfolioCreativeTwoComponent,
    PortfolioCreativeThreeComponent,
    PortfolioCreativeFourComponent,
    PortfolioCreativeFiveComponent,
    PortfolioCreativeSixComponent
  ],
  imports: [
    CommonModule,
    CreativePortfolioRoutingModule
  ]
})
export class CreativePortfolioModule { }
