import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImageSliderComponent } from './single-image-slider.component';

describe('SingleImageSliderComponent', () => {
  let component: SingleImageSliderComponent;
  let fixture: ComponentFixture<SingleImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleImageSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
