import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefMinister } from './chief-minister';

describe('ChiefMinister', () => {
  let component: ChiefMinister;
  let fixture: ComponentFixture<ChiefMinister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiefMinister],
    }).compileComponents();

    fixture = TestBed.createComponent(ChiefMinister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
