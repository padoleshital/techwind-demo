import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialComponent } from './special.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { PageComingsoonComponent } from './page-comingsoon/page-comingsoon.component';
import { PageMaintenanceComponent } from './page-maintenance/page-maintenance.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { PageThankyouComponent } from './page-thankyou/page-thankyou.component';

const routes: Routes = [
     { 
      path:'page-comingsoon',
      component:PageComingsoonComponent
    },
    {
      path:'page-maintenance',
      component:PageMaintenanceComponent
    },
    {
      path:'page-error',
      component:PageErrorComponent
    },
    {
      path:'page-thankyou',
      component:PageThankyouComponent
    }
  ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialRoutingModule { }
