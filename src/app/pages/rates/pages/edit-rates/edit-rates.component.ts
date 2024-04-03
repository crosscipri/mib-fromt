import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RatesService } from "../../services/rates.service";
import { EMPTY, Observable, catchError, first, of, switchMap, tap } from "rxjs";
import { ActivatedRoute, RouterLink, RouterModule } from "@angular/router";
import {
  RateRequestDto,
  RateResponse,
} from "../../../../interfaces/rates.interface";

@Component({
  selector: "app-edit-rates",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: "./edit-rates.component.html",
  styleUrl: "./edit-rates.component.scss",
})
export class EditRatesComponent implements OnInit {
  rateForm: FormGroup;
  alertMessage: string | null = null;
  alertType: string = "success";
  durationUnit: string = "Month";
  rateId: string | null = null;
  rate$: Observable<RateResponse | null> = this.route.paramMap.pipe(
    switchMap((params) => {
      this.rateId = params.get("id");
      if (this.rateId !== null) {
        return this.ratesService.getRateById(+this.rateId);
      }
      return of(null);
    })
  );

  constructor(
    private fb: FormBuilder,
    private ratesService: RatesService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
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
    this.rateForm.get("durationUnit")?.setValue("Month");
    this.rateForm.get("durationUnit")?.valueChanges.subscribe((value) => {
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
    if (this.isFormInvalid()) {
      return;
    }

    this.updateRate(this.rateId as string, this.rateForm.getRawValue());
  }

  private isFormInvalid(): boolean {
    if (this.rateForm.invalid) {
      this.rateForm.markAllAsTouched();
      return true;
    }

    return false;
  }

  private updateRate(rateId: string, formData: RateRequestDto) {
    this.ratesService
      .updateRate(Number(rateId), formData)
      .pipe(
        first(),
        tap((value) => this.showSuccessMessage(value.message)),
        catchError((error) => {
          this.showErrorMessage(error.error.message);
          return EMPTY;
        })
      )
      .subscribe();
  }

  private showSuccessMessage(message: string) {
    this.alertMessage = message;
    this.alertType = "success";
    this.hideMessageAfterDelay();
  }

  private showErrorMessage(message: string) {
    this.alertMessage = message;
    this.alertType = "danger";
    this.hideMessageAfterDelay();
  }

  private hideMessageAfterDelay() {
    setTimeout(() => (this.alertMessage = null), 3000);
  }
}
