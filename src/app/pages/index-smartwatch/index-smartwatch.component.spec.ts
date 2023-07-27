import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSmartwatchComponent } from './index-smartwatch.component';

describe('IndexSmartwatchComponent', () => {
  let component: IndexSmartwatchComponent;
  let fixture: ComponentFixture<IndexSmartwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSmartwatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSmartwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
