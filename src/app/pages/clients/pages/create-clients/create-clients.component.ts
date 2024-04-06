import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainersResponse } from '../../../../interfaces/trainer.interface';
import { EMPTY, Observable, catchError, first, tap } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { ClientRequestDto } from '../../../../interfaces/clients.interface';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrl: './create-clients.component.scss',
})
export class CreateClientsComponent {
  trainers$: Observable<TrainersResponse> = this.clientsService.getTrainers();
  trainers: TrainersResponse['data'] = [];
  clientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientsService: ClientsService,
    private alertService: AlertService,
  ) {
    this.clientForm = this.fb.group({
      name: [null, Validators.required],
      firstLastName: [null, Validators.required],
      secondLastName: [null],
      email: [null, [Validators.email, Validators.required]],
      phoneNumber: [null, Validators.pattern('^\\d{9}$')],
      birthDate: [null],
      trainer: [null, Validators.required],
    });

    this.trainers$.pipe(first()).subscribe((response) => {
      this.trainers = response.data;
    });
  }

  onSubmit() {
    if (this.isFormInvalid()) {
      return;
    }

    const formData = this.prepareFormData();

    this.createClient(formData);
  }

  private isFormInvalid(): boolean {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      return true;
    }

    return false;
  }

  private prepareFormData() {
    const trainerId = this.clientForm?.get('trainer')?.value;

    const selectedTrainer = this.trainers?.find(
      (trainer) => Number(trainer.id) === Number(trainerId),
    );

    return {
      ...this.clientForm.getRawValue(),
      trainer: selectedTrainer,
    };
  }

  private createClient(formData: ClientRequestDto) {
    this.clientsService
      .createClient(formData)
      .pipe(
        first(),
        tap((val) => this.alertService.show(val.message, 'success')),
      )
      .subscribe();
  }
}
