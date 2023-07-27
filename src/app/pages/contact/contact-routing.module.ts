import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactOneComponent } from './contact-one/contact-one.component';
import { ContactTwoComponent } from './contact-two/contact-two.component';

const routes: Routes = [
  {
    path: '', 
    component:LayoutComponent,
    children:[
     { 
      path:'contact-detail',
      component:ContactDetailComponent
    },
    {
      path:'contact-one',
      component:ContactOneComponent
    },
    {
      path:'contact-two',
      component:ContactTwoComponent
    }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
