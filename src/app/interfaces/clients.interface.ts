import { Rate } from './rates.interface';
import { Trainer } from './trainer.interface';

export interface Client {
  id?: number;
  name: string;
  firstLastName: string;
  secondLastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string | null;
  registrationDate?: string;
  trainer: Trainer | null;
}

export interface ClientData {
  client: Client;
  rate: Rate | null;
  endDate: string | null;
  startDate?: string | null;
  pendingPayments: boolean;
}

export interface ClientRequestDto {
  name: string;
  firstLastName: string;
  secondLastName?: string;
  email: string;
  phoneNumber?: string;
  birthDate?: string;
  trainer?: Trainer;
}

export interface ClientResponse {
  data: ClientData;
  showMessage?: string;
  message: string;
}

export interface UpdateClientResponse {
  data: Client;
  showMessage?: string;
  message: string;
}

export interface ClientsResponse {
  data: ClientData[];
  message: string;
}

export interface ClientRateData {
  id: number;
  client: Client;
  rate: Rate;
  endDate: string;
  startDate: string;
}

export interface ClientRateResponse {
  data: ClientRateData;
  showMessage: string;
  message: string;
}

export interface AssignRateToClientDto {
  rateId: number;
  startDate: string;
  paid: boolean;
  paymentDate: string;
}

export interface PayRate {
  clientId: number;
  rateId: number;
  paymentDate: string;
}
