import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexModernSaasComponent } from './index-modern-saas.component';

describe('IndexModernSaasComponent', () => {
  let component: IndexModernSaasComponent;
  let fixture: ComponentFixture<IndexModernSaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexModernSaasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexModernSaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
