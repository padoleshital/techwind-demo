import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobCareersRoutingModule } from './job-careers-routing.module';
import { JobCareersComponent } from './job-careers.component';
import { AllJobComponent } from './all-job/all-job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobCareerComponent } from './job-career/job-career.component';
import { JobCandidatesComponent } from './job-candidates/job-candidates.component';
import { CandidatesDetailComponent } from './candidates-detail/candidates-detail.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { CompaniesDetailComponent } from './companies-detail/companies-detail.component';


@NgModule({
  declarations: [
    JobCareersComponent,
    AllJobComponent,
    JobDetailComponent,
    JobApplyComponent,
    JobPostComponent,
    JobCareerComponent,
    JobCandidatesComponent,
    CandidatesDetailComponent,
    AllCompaniesComponent,
    CompaniesDetailComponent
  ],
  imports: [
    CommonModule,
    JobCareersRoutingModule
  ]
})
export class JobCareersModule { }
