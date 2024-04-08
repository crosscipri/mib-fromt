import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalRateCardComponent } from './historical-rate-card.component';

describe('HistoricalRateCardComponent', () => {
  let component: HistoricalRateCardComponent;
  let fixture: ComponentFixture<HistoricalRateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricalRateCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricalRateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
