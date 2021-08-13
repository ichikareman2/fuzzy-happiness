import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyHapinessLibComponent } from './fuzzy-hapiness-lib.component';

describe('FuzzyHapinessLibComponent', () => {
  let component: FuzzyHapinessLibComponent;
  let fixture: ComponentFixture<FuzzyHapinessLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuzzyHapinessLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzzyHapinessLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
