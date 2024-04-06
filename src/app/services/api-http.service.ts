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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWliY2xpZW50cy1mZWQ1YiIsImF1ZCI6Im1pYmNsaWVudHMtZmVkNWIiLCJhdXRoX3RpbWUiOjE3MTI0MTE2NTcsInVzZXJfaWQiOiJWSFJyeHViUlRCUFVjMmZqNW4wSm1QcmN6d0oyIiwic3ViIjoiVkhScnh1YlJUQlBVYzJmajVuMEptUHJjendKMiIsImlhdCI6MTcxMjQxMTY1NywiZXhwIjoxNzEyNDE1MjU3LCJlbWFpbCI6ImFkcmlhbmZlcm5hbmRlemRpYXpnQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZHJpYW5mZXJuYW5kZXpkaWF6Z0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.npmw9a4HBRahMdmW-Llp1e4A2AYpnyB5VQhZUFLWMuc8-aJGXsZRu25Apo7lT9Dg7e2kNuHsNHLaSSbVVzMfj33k9DA2mgzVyLAbWIykbvALLoGaoVMPdpcocT20m6yGIljN6LQy1vtdq48XEz-9G6JTiIqYt3Od0M4M3VcaJWLRnEEbIA6gurp3Qky3q8QruU2i4QnKn2XComXhTmwScGaY1e7sU9C8rbs4YbKSWgjrCQ0RcPi1rqy95JQP29Rn3aKkJbdVQ4mmhEKvx8JNbdDYu11aSqlUlvEP9S0NY0AtZQkJ-rCP_F75mqQM5dQ4YEHmKiHRSl_-8Ya4YsStNw';
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
