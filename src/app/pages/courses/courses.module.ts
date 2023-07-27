import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListingComponent } from './courses-listing/courses-listing.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListingComponent,
    CoursesDetailComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
