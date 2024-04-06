import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RatesService } from '../../services/rates.service';
import { Observable, first, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  RateRequestDto,
  RateResponse,
} from '../../../../interfaces/rates.interface';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-edit-rates',
  templateUrl: './edit-rates.component.html',
  styleUrl: './edit-rates.component.scss',
})
export class EditRatesComponent implements OnInit {
  rateForm: FormGroup;
  durationUnit: string = 'Month';
  rateId: string | null = null;
  rate$: Observable<RateResponse | null> = this.route.paramMap.pipe(
    switchMap((params) => {
      this.rateId = params.get('id');
      if (this.rateId !== null) {
        return this.ratesService.getRateById(+this.rateId);
      }
      return of(null);
    }),
  );

  constructor(
    private fb: FormBuilder,
    private ratesService: RatesService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private alertService: AlertService,
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
    this.setRateData();
    this.cdr.detectChanges();
  }

  setRateData() {
    this.rate$.pipe(first()).subscribe((rates) => {
      if (rates) this.rateForm.patchValue(rates.data);
    });
  }

  onSubmit() {
    if (this.#isFormInvalid()) {
      return;
    }

    this.#updateRate(this.rateId as string, this.rateForm.getRawValue());
  }

  #isFormInvalid(): boolean {
    if (this.rateForm.invalid) {
      this.rateForm.markAllAsTouched();
      return true;
    }

    return false;
  }

  #updateRate(rateId: string, formData: RateRequestDto) {
    this.ratesService
      .updateRate(Number(rateId), formData)
      .pipe(
        first(),
        tap((value) => this.alertService.show(value.message, 'success')),
      )
      .subscribe();
  }
}
