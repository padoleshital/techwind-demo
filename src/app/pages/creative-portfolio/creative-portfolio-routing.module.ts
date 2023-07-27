import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreativePortfolioComponent } from './creative-portfolio.component';
import { CentrelayoutComponent } from 'src/app/layout/centrelayout/centrelayout.component';
import { PortfolioClassicTwoComponent } from '../classic-portfolio/portfolio-classic-two/portfolio-classic-two.component';
import { PortfolioClassicThreeComponent } from '../classic-portfolio/portfolio-classic-three/portfolio-classic-three.component';
import { PortfolioClassicFourComponent } from '../classic-portfolio/portfolio-classic-four/portfolio-classic-four.component';
import { PortfolioClassicFiveComponent } from '../classic-portfolio/portfolio-classic-five/portfolio-classic-five.component';
import { PortfolioClassicSixComponent } from '../classic-portfolio/portfolio-classic-six/portfolio-classic-six.component';

const routes: Routes = [
  { path: '',
  component:CentrelayoutComponent,  
  //  component: CreativePortfolioComponent 
  children:[
    {
      path:'portfolio-creative-two',
      component:PortfolioClassicTwoComponent
    },
    {
      path:'portfolio-creative-three',
      component:PortfolioClassicThreeComponent
    },
    {
      path:'portfolio-creative-four',
      component:PortfolioClassicFourComponent
    },
    {
      path:'portfolio-creative-five',
      component:PortfolioClassicFiveComponent
    },
    {
      path:'portfolio-creative-six',
      component:PortfolioClassicSixComponent
    },
  ]  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreativePortfolioRoutingModule { }
