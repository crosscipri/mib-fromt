import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, RouterLink, RouterModule } from "@angular/router";
import { EMPTY, Observable, catchError, first, of, switchMap, tap } from "rxjs";
import {
  Client,
  ClientRequestDto,
  ClientResponse,
} from "../../../../interfaces/clients.interface";
import { ClientsService } from "../../services/clients.service";
import { TrainersResponse } from "../../../../interfaces/trainer.interface";

@Component({
  selector: "app-edit-client",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: "./edit-client.component.html",
  styleUrl: "./edit-client.component.scss",
})
export class EditClientComponent implements OnInit {
  trainers$: Observable<TrainersResponse> = this.clientsService.getTrainers();
  trainers: TrainersResponse["data"] = [];
  clientForm: FormGroup;
  alertMessage: string | null = null;
  alertType: string = "success";
  clientId: string | null = null;
  client$: Observable<ClientResponse | null> = this.route.paramMap.pipe(
    switchMap((params) => {
      this.clientId = params.get("id");
      if (this.clientId !== null) {
        return this.clientsService.getClientById(+this.clientId);
      }
      return of(null);
    })
  );

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.clientForm = this.fb.group({
      name: [null, Validators.required],
      firstLastName: [null, Validators.required],
      secondLastName: [null],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.pattern("^\\d{9}$")],
      birthDate: [null],
      trainer: [null, Validators.required],
    });

    this.trainers$.pipe(first()).subscribe((response) => {
      this.trainers = response.data;
    });
  }

  ngOnInit() {
    this.setClientForm();
  }

  setClientForm() {
    this.client$.pipe(first()).subscribe((client) => {
      if (client) {
        this.patchFormValues(client.data.client);
      }
    });
  }

  patchFormValues(client: Client) {
    this.clientForm.patchValue(client);
    this.clientForm.get("phoneNumber")?.setValue(Number(client.phoneNumber));
    this.clientForm.get("trainer")?.setValue(client.trainer?.id);
    this.cdr.detectChanges();
  }

  onSubmit() {
    if (this.isFormInvalid()) {
      return;
    }

    const formData = this.prepareFormData();

    this.updateClient(formData);
  }

  private isFormInvalid(): boolean {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      return true;
    }

    return false;
  }

  private prepareFormData() {
    const trainerId = this.clientForm?.get("trainer")?.value;

    const selectedTrainer = this.trainers?.find(
      (trainer) => Number(trainer.id) === Number(trainerId)
    );

    return {
      ...this.clientForm.getRawValue(),
      trainer: selectedTrainer,
    };
  }

  private updateClient(formData: ClientRequestDto) {
    this.clientsService
      .updateClient(Number(this.clientId), formData)
      .pipe(
        first(),
        tap(() => this.showSuccessMessage()),
        catchError((error) => {
          this.showErrorMessage(error.error.message);
          return EMPTY;
        })
      )
      .subscribe((value) => {
        this.showSuccessMessage(value.message);
      });
  }

  private showSuccessMessage(
    message: string = "Cliente editado correctamente"
  ) {
    this.alertMessage = message;
    this.alertType = "success";
    this.hideMessageAfterDelay();
  }

  private showErrorMessage(
    message: string = "No se ha podido editar el cliente"
  ) {
    this.alertMessage = message;
    this.alertType = "danger";
    this.hideMessageAfterDelay();
  }

  private hideMessageAfterDelay() {
    setTimeout(() => (this.alertMessage = null), 2000);
  }
}
