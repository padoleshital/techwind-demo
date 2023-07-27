import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightnavbarlayoutComponent } from './rightnavbarlayout.component';

describe('RightnavbarlayoutComponent', () => {
  let component: RightnavbarlayoutComponent;
  let fixture: ComponentFixture<RightnavbarlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightnavbarlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightnavbarlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
