import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryPortfolioComponent } from './masonry-portfolio.component';

describe('MasonryPortfolioComponent', () => {
  let component: MasonryPortfolioComponent;
  let fixture: ComponentFixture<MasonryPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonryPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonryPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
