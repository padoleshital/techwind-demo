import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCareersComponent } from './job-careers.component';

describe('JobCareersComponent', () => {
  let component: JobCareersComponent;
  let fixture: ComponentFixture<JobCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCareersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
