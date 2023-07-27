import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilityComponent } from './utility.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { PageTermsComponent } from './page-terms/page-terms.component';
import { PagePrivacyComponent } from './page-privacy/page-privacy.component';

const routes: Routes = [
  {
     path: '', 
     component:LayoutComponent,
     children:[
      {
        path:'page-terms',
        component:PageTermsComponent
      },
      {
        path:'page-privacy',
        component:PagePrivacyComponent
      }
     ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityRoutingModule { }
