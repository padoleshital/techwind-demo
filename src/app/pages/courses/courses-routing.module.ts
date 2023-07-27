import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { CoursesListingComponent } from './courses-listing/courses-listing.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'course-listing',component:CoursesListingComponent
      },
      {
        path:'courses-detail',component:CoursesDetailComponent
      }
    ]
  }


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
