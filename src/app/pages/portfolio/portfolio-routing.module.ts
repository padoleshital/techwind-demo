import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { CentrelayoutComponent } from 'src/app/layout/centrelayout/centrelayout.component';
import { PortfolioModernTwoComponent } from './portfolio-modern-two/portfolio-modern-two.component';
import { PortfolioModernThreeComponent } from './portfolio-modern-three/portfolio-modern-three.component';
import { PortfolioModernFourComponent } from './portfolio-modern-four/portfolio-modern-four.component';
import { PortfolioModernFiveComponent } from './portfolio-modern-five/portfolio-modern-five.component';
import { PortfolioModernSixComponent } from './portfolio-modern-six/portfolio-modern-six.component';

const routes: Routes = [
  {
    path:'',
    component:CentrelayoutComponent,
    children:[
      // { path: '', component: PortfolioComponent },
      {
        path:'portfolio-modern-two',
        component:PortfolioModernTwoComponent
      },
      {
        path:'portfolio-modern-three',
        component:PortfolioModernThreeComponent
      },
      {
        path:'portfolio-modern-four',
        component:PortfolioModernFourComponent
      },
      {
        path:'portfolio-modern-five',
        component:PortfolioModernFiveComponent
      },
      {
        path:'portfolio-modern-six',
        component:PortfolioModernSixComponent
      }
    ]
  }
  
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
