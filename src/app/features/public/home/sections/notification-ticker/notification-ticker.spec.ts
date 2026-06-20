import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTicker } from './notification-ticker';

describe('NotificationTicker', () => {
  let component: NotificationTicker;
  let fixture: ComponentFixture<NotificationTicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationTicker],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationTicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
