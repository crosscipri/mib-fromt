import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRatesComponent } from './edit-rates.component';

describe('EditRatesComponent', () => {
  let component: EditRatesComponent;
  let fixture: ComponentFixture<EditRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
