import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsolutionTwoComponent } from './itsolution-two.component';

describe('ItsolutionTwoComponent', () => {
  let component: ItsolutionTwoComponent;
  let fixture: ComponentFixture<ItsolutionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItsolutionTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItsolutionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
