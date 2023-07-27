import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateRoutingModule } from './real-estate-routing.module';
import { RealEstateComponent } from './real-estate.component';
import { ListingComponent } from './listing/listing.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { FeatherModule } from 'angular-feather';


@NgModule({
  declarations: [
    RealEstateComponent,
    ListingComponent,
    PropertyDetailComponent
  ],
  imports: [
    CommonModule,
    RealEstateRoutingModule,
    
  ]
})
export class RealEstateModule { }
