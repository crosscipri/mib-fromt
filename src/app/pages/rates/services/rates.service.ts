import { Injectable } from '@angular/core';
import { ApiHttpService } from '../../../services/api-http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import {
  RateRequestDto,
  RateResponse,
  RatesResponse,
} from '../../../interfaces/rates.interface';

@Injectable({
  providedIn: 'root',
})
export class RatesService extends ApiHttpService {
  baseUrl = `${environment.apiUrl}/api/rates`;

  constructor(http: HttpClient) {
    super(http);
  }

  getRates(): Observable<RatesResponse> {
    return this.get(this.baseUrl);
  }

  getRateById(rateId: number): Observable<RateResponse> {
    return this.get(`${this.baseUrl}/${rateId}`);
  }

  createRate(clientData: RateRequestDto): Observable<RateResponse> {
    return this.post(this.baseUrl, clientData);
  }

  updateRate(
    rateId: number,
    rateData: RateRequestDto,
  ): Observable<RateResponse> {
    return this.put(`${this.baseUrl}/${rateId}`, rateData);
  }

  deleteRate(rateId: number): Observable<RateResponse> {
    return this.delete(`${this.baseUrl}/${rateId}`);
  }
}
