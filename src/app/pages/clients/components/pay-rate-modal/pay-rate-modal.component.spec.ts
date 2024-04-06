import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRateModalComponent } from './pay-rate-modal.component';

describe('PayRateModalComponent', () => {
  let component: PayRateModalComponent;
  let fixture: ComponentFixture<PayRateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayRateModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayRateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
