import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobCareersComponent } from './job-careers.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { AllJobComponent } from './all-job/all-job.component';
import { JobCandidatesComponent } from './job-candidates/job-candidates.component';
import { CandidatesDetailComponent } from './candidates-detail/candidates-detail.component';
import { CompaniesDetailComponent } from './companies-detail/companies-detail.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'page-job-grid',
        component:AllJobComponent
      },
      {
       path:'page-job-detail',
       component:JobDetailComponent 
      },
      {
        path:'page-job-apply',
        component:JobApplyComponent
      },
      {
        path:'page-job-post',
        component:JobPostComponent
      },
      {
        path:'page-job-career',
        component:JobCareersComponent
      },
      {
        path:'page-job-candidates',
        component:JobCandidatesComponent
      },
      {
        path:'page-job-candidate-detail',
        component:CandidatesDetailComponent
      },
      {
        path:'page-job-companies',
        component:AllCompaniesComponent
      },
      {
        path:'page-job-company-detail',
        component:CompaniesDetailComponent
      }
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobCareersRoutingModule { }
