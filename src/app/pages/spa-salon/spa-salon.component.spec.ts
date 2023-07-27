import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaSalonComponent } from './spa-salon.component';

describe('SpaSalonComponent', () => {
  let component: SpaSalonComponent;
  let fixture: ComponentFixture<SpaSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaSalonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
