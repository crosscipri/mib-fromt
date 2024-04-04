import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  headers: any;

  constructor(private http: HttpClient) {
    const token =
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWliY2xpZW50cy1mZWQ1YiIsImF1ZCI6Im1pYmNsaWVudHMtZmVkNWIiLCJhdXRoX3RpbWUiOjE3MTIyNTU1ODUsInVzZXJfaWQiOiJWSFJyeHViUlRCUFVjMmZqNW4wSm1QcmN6d0oyIiwic3ViIjoiVkhScnh1YlJUQlBVYzJmajVuMEptUHJjendKMiIsImlhdCI6MTcxMjI1NTU4NSwiZXhwIjoxNzEyMjU5MTg1LCJlbWFpbCI6ImFkcmlhbmZlcm5hbmRlemRpYXpnQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZHJpYW5mZXJuYW5kZXpkaWF6Z0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.P6c-0GpP3wMrx3I-7bhZY9gkHUPwlCHXJFbuih2q2Pa_A9cBKLTaDI0AUucqy_X2H3nGW1e5-Ne9UNMax0os6Zhlc3h4jngYxZNkrXvgT_YZwzvWKh5FZdscgqkF3DlPkDBucCwZP_371tOhNDS-lj6HXAmqNE85eO-GZL0aJgKycMNCnfJCuQO0Ykk8RzqB6dmFOV5Q9BElLRHt1ngTu7uQFmYTdkklidmqNzOiIDQLlHhbnD69BZe35elHztJ6Fhoonj08G1EY25mNBNOy9IJMxONP9b7BuqXvLV4kITGHfLFw3n2GSeb2W6Tmf7XDFirJ54BLQhZpI1yY2C-Yrg';
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  get(url: string): Observable<any> {
    return this.http.get(url, this.headers);
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body, this.headers);
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(url, body, this.headers);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url, this.headers);
  }
}
