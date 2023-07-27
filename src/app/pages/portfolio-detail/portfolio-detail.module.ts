import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioDetailRoutingModule } from './portfolio-detail-routing.module';
import { PortfolioDetailComponent } from './portfolio-detail.component';
import { PortfolioDetailTwoComponent } from './portfolio-detail-two/portfolio-detail-two.component';
import { PortfolioDetailThreeComponent } from './portfolio-detail-three/portfolio-detail-three.component';
import { PortfolioDetailFourComponent } from './portfolio-detail-four/portfolio-detail-four.component';


@NgModule({
  declarations: [
    PortfolioDetailComponent,
    PortfolioDetailTwoComponent,
    PortfolioDetailThreeComponent,
    PortfolioDetailFourComponent,
   
  ],
  imports: [
    CommonModule,
    PortfolioDetailRoutingModule
  ]
})
export class PortfolioDetailModule { }
