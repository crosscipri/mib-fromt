import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { ApiHttpService } from './api-http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiHttpService {
  baseUrl = `${environment.apiUrl}/api/auth`;

  constructor(
    http: HttpClient,
    private router: Router,
  ) {
    super(http);
  }

  login(email: string, password: string): Observable<any> {
    return this.post(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response) => {
        localStorage.setItem('idToken', response.data.idToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        this.router.navigate(['/home']);
      }),
    );
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.post(`${this.baseUrl}/login/refresh`, { refreshToken }).pipe(
      tap((response) => {
        localStorage.setItem('idToken', response.data.idToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
      }),
    );
  }

  logout() {
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/login']);
  }
}
