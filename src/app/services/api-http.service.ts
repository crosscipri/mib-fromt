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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWliY2xpZW50cy1mZWQ1YiIsImF1ZCI6Im1pYmNsaWVudHMtZmVkNWIiLCJhdXRoX3RpbWUiOjE3MTIzOTk5OTAsInVzZXJfaWQiOiJWSFJyeHViUlRCUFVjMmZqNW4wSm1QcmN6d0oyIiwic3ViIjoiVkhScnh1YlJUQlBVYzJmajVuMEptUHJjendKMiIsImlhdCI6MTcxMjM5OTk5MCwiZXhwIjoxNzEyNDAzNTkwLCJlbWFpbCI6ImFkcmlhbmZlcm5hbmRlemRpYXpnQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZHJpYW5mZXJuYW5kZXpkaWF6Z0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.dv4keQanDlDz3Tsun-4D8f6xfL9Q4uIcf5nu4qwfyEHd_K5l5yiWm1gVC2OwN6BXNqUvRJLC18D7J8DpBEmnaUK3CXiyeyzKn20Dl2NtAnXQsKtX0mPTzR0pauOgSNLyxbQTdalBABhAXbthDCHz3003SFTBv7J9gMuW73EdvCb8mHUJtwFc0FQ2yjLqgLhxN1skH-4rY3_ycFwiIRaB0DOIgzofoWndur3BLo7eY6kBtZXjErdSqkBcMtHlPxh08HAFX10Oo26rbcl4qUzX7C8Zr3_dUZW5gINymtXtrGBIBOcqpXQvTO85bR0nt6aRqqcq31xAS5sleSX9QtVlBA';
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
