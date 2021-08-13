import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyHappinessLibComponent } from './fuzzy-happiness-lib.component';

describe('FuzzyHappinessLibComponent', () => {
  let component: FuzzyHappinessLibComponent;
  let fixture: ComponentFixture<FuzzyHappinessLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuzzyHappinessLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzzyHappinessLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
