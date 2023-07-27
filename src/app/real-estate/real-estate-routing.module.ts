import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateComponent } from './real-estate.component';
import { ListingComponent } from './listing/listing.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'property-listing', component:ListingComponent
      },
      {
        path:'proprty-detail',component:PropertyDetailComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule { }
