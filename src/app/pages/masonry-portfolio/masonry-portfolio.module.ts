import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasonryPortfolioRoutingModule } from './masonry-portfolio-routing.module';
import { MasonryPortfolioComponent } from './masonry-portfolio.component';
import { PortfolioMasonrySixComponent } from './portfolio-masonry-six/portfolio-masonry-six.component';
import { PortfolioMasonryTwoComponent } from './portfolio-masonry-two/portfolio-masonry-two.component';
import { PortfolioMasonryThreeComponent } from './portfolio-masonry-three/portfolio-masonry-three.component';
import { PortfolioMasonryFourComponent } from './portfolio-masonry-four/portfolio-masonry-four.component';
import { PortfolioMasonryFiveComponent } from './portfolio-masonry-five/portfolio-masonry-five.component';


@NgModule({
  declarations: [
    MasonryPortfolioComponent,
    PortfolioMasonrySixComponent,
    PortfolioMasonryTwoComponent,
    PortfolioMasonryThreeComponent,
    PortfolioMasonryFourComponent,
    PortfolioMasonryFiveComponent
  ],
  imports: [
    CommonModule,
    MasonryPortfolioRoutingModule
  ]
})
export class MasonryPortfolioModule { }
