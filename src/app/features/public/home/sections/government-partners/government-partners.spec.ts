import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPartners } from './government-partners';

describe('GovernmentPartners', () => {
  let component: GovernmentPartners;
  let fixture: ComponentFixture<GovernmentPartners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentPartners],
    }).compileComponents();

    fixture = TestBed.createComponent(GovernmentPartners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
