import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpcenterComponent } from './helpcenter.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { HelpcentreFaqComponent } from './helpcentre-faq/helpcentre-faq.component';
import { HelpcentreGuidesComponent } from './helpcentre-guides/helpcentre-guides.component';
import { HelpcentreSupportComponent } from './helpcentre-support/helpcentre-support.component';

const routes: Routes = [
  { path: '',
  component:LayoutComponent,
  children:[
    {
      path:'helpcenter',
      component: HelpcenterComponent 
    },
    {
      path:'helpcenter-faqs',
      component:HelpcentreFaqComponent
    },
    {
      path:'helpcenter-guides',
      component:HelpcentreGuidesComponent
    },
    {
      path:'helpcenter-support',
      component:HelpcentreSupportComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpcenterRoutingModule { }
