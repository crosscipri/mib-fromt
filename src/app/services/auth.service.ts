import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiHttpService {
  baseUrl = `${environment.baseApiUrl}/api/auth`;

  constructor(http: HttpClient) {
    super(http);
  }

  login(email: string, password: string): Observable<any> {
    return this.post(`/login`, { email, password });
  }
}
