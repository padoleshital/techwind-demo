import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioDetailComponent } from './portfolio-detail.component';
import { CentrelayoutComponent } from 'src/app/layout/centrelayout/centrelayout.component';
import { PortfolioDetailTwoComponent } from './portfolio-detail-two/portfolio-detail-two.component';
import { PortfolioDetailThreeComponent } from './portfolio-detail-three/portfolio-detail-three.component';
import { PortfolioDetailFourComponent } from './portfolio-detail-four/portfolio-detail-four.component';

const routes: Routes = [
  { path: '',
  component:CentrelayoutComponent,  
  // { path: '', component: MasonryPortfolioComponent  
  children:[
    {
      path:'portfolio-detail-two',
      component:PortfolioDetailTwoComponent
    },
    {
      path:'portfolio-detail-three',
      component:PortfolioDetailThreeComponent
    },
    {
      path:'portfolio-detail-four',
      component:PortfolioDetailFourComponent
    }
  ]  
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioDetailRoutingModule { }
