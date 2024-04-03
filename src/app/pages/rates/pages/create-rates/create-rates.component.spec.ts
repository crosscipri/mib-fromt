import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRatesComponent } from './create-rates.component';

describe('CreateRatesComponent', () => {
  let component: CreateRatesComponent;
  let fixture: ComponentFixture<CreateRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
