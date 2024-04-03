import { Injectable } from "@angular/core";
import { ApiHttpService } from "../../../services/api-http.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import {
  AssignRateToClientDto,
  Client,
  ClientRateResponse,
  ClientRequestDto,
  ClientResponse,
  ClientsResponse,
  UpdateClientResponse,
} from "../../../interfaces/clients.interface";
import {
  ClientRate,
  RateRequestDto,
  RateResponse,
} from "../../../interfaces/rates.interface";
import { TrainersResponse } from "../../../interfaces/trainer.interface";

@Injectable({
  providedIn: "root",
})
export class ClientsService extends ApiHttpService {
  baseUrl = "/api/clients";

  constructor(http: HttpClient) {
    super(http);
  }

  getClients(): Observable<ClientsResponse> {
    return this.get(this.baseUrl);
  }

  getClientById(clientId: number): Observable<ClientResponse> {
    return this.get(`${this.baseUrl}/${clientId}`);
  }

  createClient(clientData: ClientRequestDto): Observable<ClientResponse> {
    return this.post(this.baseUrl, clientData);
  }

  updateClient(
    clientId: number,
    clientData: ClientRequestDto
  ): Observable<UpdateClientResponse> {
    return this.put(`${this.baseUrl}/${clientId}`, clientData);
  }

  deleteClient(clientId: number): Observable<ClientResponse> {
    return this.delete(`${this.baseUrl}/${clientId}`);
  }

  createClientRate(
    clientId: number,
    clientRate: ClientRate
  ): Observable<ClientRateResponse> {
    return this.post(`${this.baseUrl}/${clientId}/rate`, clientRate);
  }

  renewClientRate(
    clientId: number,
    renewDate: string
  ): Observable<ClientRateResponse> {
    return this.post(`${this.baseUrl}/${clientId}/renew`, { renewDate });
  }

  deleteClientRate(clientId: number): Observable<ClientRateResponse> {
    return this.delete(`${this.baseUrl}/${clientId}/rate`);
  }

  getTrainers(): Observable<TrainersResponse> {
    return this.get(`/api/trainers`);
  }

  assignRateToClient(
    clientId: number,
    body: AssignRateToClientDto
  ): Observable<ClientResponse> {
    return this.post(`${this.baseUrl}/${clientId}/assign-rate`, body);
  }

  createRate(clientData: RateRequestDto): Observable<RateResponse> {
    return this.post("/api/rates", clientData);
  }
}
