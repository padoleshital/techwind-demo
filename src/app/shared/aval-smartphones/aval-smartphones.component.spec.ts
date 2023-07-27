import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalSmartphonesComponent } from './aval-smartphones.component';

describe('AvalSmartphonesComponent', () => {
  let component: AvalSmartphonesComponent;
  let fixture: ComponentFixture<AvalSmartphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvalSmartphonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvalSmartphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
