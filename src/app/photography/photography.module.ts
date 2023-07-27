import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographyRoutingModule } from './photography-routing.module';
import { PhotographyComponent } from './photography.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    PhotographyComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PhotographyRoutingModule
  ]
})
export class PhotographyModule { }
