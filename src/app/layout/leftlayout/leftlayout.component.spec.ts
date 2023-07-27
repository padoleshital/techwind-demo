import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftlayoutComponent } from './leftlayout.component';

describe('LeftlayoutComponent', () => {
  let component: LeftlayoutComponent;
  let fixture: ComponentFixture<LeftlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
