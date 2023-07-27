import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassicPortfolioComponent } from './classic-portfolio.component';
import { CentrelayoutComponent } from 'src/app/layout/centrelayout/centrelayout.component';
import { PortfolioClassicTwoComponent } from './portfolio-classic-two/portfolio-classic-two.component';
import { PortfolioClassicThreeComponent } from './portfolio-classic-three/portfolio-classic-three.component';
import { PortfolioClassicFourComponent } from './portfolio-classic-four/portfolio-classic-four.component';

const routes: Routes = [
  { path: '',
    component:CentrelayoutComponent,
    children:[
      {
        path:'portfolio-classic-two',
        component:PortfolioClassicTwoComponent
      },
      {
        path:'portfolio-classic-three',
        component:PortfolioClassicThreeComponent
      },
      {
        path:'portfolio-classic-four',
        component:PortfolioClassicFourComponent
      },
      {
        path:'portfolio-classic-two',
        component:PortfolioClassicTwoComponent
      }
    ]  
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassicPortfolioRoutingModule { }
