import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetMarketingComponent } from './net-marketing.component';

describe('NetMarketingComponent', () => {
  let component: NetMarketingComponent;
  let fixture: ComponentFixture<NetMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
