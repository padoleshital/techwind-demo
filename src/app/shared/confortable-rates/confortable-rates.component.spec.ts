import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfortableRatesComponent } from './confortable-rates.component';

describe('ConfortableRatesComponent', () => {
  let component: ConfortableRatesComponent;
  let fixture: ComponentFixture<ConfortableRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfortableRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfortableRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
