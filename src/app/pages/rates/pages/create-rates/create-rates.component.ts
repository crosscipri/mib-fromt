import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMPTY, catchError, first, tap } from 'rxjs';
import { RateRequestDto } from '../../../../interfaces/rates.interface';
import { RatesService } from '../../services/rates.service';
import { AlertService } from '../../../../services/alert.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-rates',
  templateUrl: './create-rates.component.html',
  styleUrl: './create-rates.component.scss',
})
export class CreateRatesComponent implements OnInit {
  rateForm: FormGroup;
  durationUnit: string = 'Month';
  constructor(
    private fb: FormBuilder,
    private ratesService: RatesService,
    private cdr: ChangeDetectorRef,
    private alertService: AlertService,
    private location: Location,
  ) {
    this.rateForm = this.fb.group({
      name: [null, Validators.required],
      description: [null],
      price: [null, Validators.required],
      duration: [null, Validators.required],
      durationUnit: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.rateForm.get('durationUnit')?.setValue('Month');
    this.rateForm.get('durationUnit')?.valueChanges.subscribe((value) => {
      this.durationUnit = value;
    });
    this.cdr.detectChanges();
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    if (this.isFormInvalid()) {
      return;
    }

    this.createRate(this.rateForm.getRawValue());
  }

  private isFormInvalid(): boolean {
    if (this.rateForm.invalid) {
      this.rateForm.markAllAsTouched();
      return true;
    }

    return false;
  }

  private createRate(formData: RateRequestDto) {
    this.ratesService
      .createRate(formData)
      .pipe(
        first(),
        tap((value) => this.alertService.show(value.message, 'success')),
      )
      .subscribe(() => {
        this.rateForm.reset();
      });
  }
}
