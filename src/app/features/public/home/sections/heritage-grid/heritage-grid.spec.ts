import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageGrid } from './heritage-grid';

describe('HeritageGrid', () => {
  let component: HeritageGrid;
  let fixture: ComponentFixture<HeritageGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeritageGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(HeritageGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
