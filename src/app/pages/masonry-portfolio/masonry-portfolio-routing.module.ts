import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasonryPortfolioComponent } from './masonry-portfolio.component';
import { CentrelayoutComponent } from 'src/app/layout/centrelayout/centrelayout.component';
import { PortfolioMasonryTwoComponent } from './portfolio-masonry-two/portfolio-masonry-two.component';
import { PortfolioMasonryThreeComponent } from './portfolio-masonry-three/portfolio-masonry-three.component';
import { PortfolioMasonryFourComponent } from './portfolio-masonry-four/portfolio-masonry-four.component';
import { PortfolioMasonryFiveComponent } from './portfolio-masonry-five/portfolio-masonry-five.component';
import { PortfolioMasonrySixComponent } from './portfolio-masonry-six/portfolio-masonry-six.component';

const routes: Routes = [
  { path: '',
  component:CentrelayoutComponent,  
  // { path: '', component: MasonryPortfolioComponent  
  children:[
    {
      path:'portfolio-masonry-two',
      component:PortfolioMasonryTwoComponent
    },
    {
      path:'portfolio-masonry-three',
      component:PortfolioMasonryThreeComponent
    },
    {
      path:'portfolio-masonry-four',
      component:PortfolioMasonryFourComponent
    },
    {
      path:'portfolio-masonry-five',
      component:PortfolioMasonryFiveComponent
    },
    {
      path:'portfolio-masonry-six',
      component:PortfolioMasonrySixComponent
    },
  ]  
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasonryPortfolioRoutingModule { }
