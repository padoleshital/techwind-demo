import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotographyComponent } from './photography.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LeftnavbarlayoutComponent } from '../layout/leftnavbarlayout/leftnavbarlayout.component';
import { RightnavbarlayoutComponent } from '../layout/rightnavbarlayout/rightnavbarlayout.component';

const routes: Routes = [
  { 
    path: '',
    component:RightnavbarlayoutComponent,
    children:[
      {
        path:'photography-about',
        component: PhotographyComponent 
      },
      {
        path:'photography-portfolio',
        component:PortfolioComponent
      }
    ]
   
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographyRoutingModule { }
