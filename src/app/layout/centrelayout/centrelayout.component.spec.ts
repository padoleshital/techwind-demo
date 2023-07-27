import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrelayoutComponent } from './centrelayout.component';

describe('CentrelayoutComponent', () => {
  let component: CentrelayoutComponent;
  let fixture: ComponentFixture<CentrelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrelayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
