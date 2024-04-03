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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWliY2xpZW50cy1mZWQ1YiIsImF1ZCI6Im1pYmNsaWVudHMtZmVkNWIiLCJhdXRoX3RpbWUiOjE3MTIxNjk1ODAsInVzZXJfaWQiOiJWSFJyeHViUlRCUFVjMmZqNW4wSm1QcmN6d0oyIiwic3ViIjoiVkhScnh1YlJUQlBVYzJmajVuMEptUHJjendKMiIsImlhdCI6MTcxMjE2OTU4MCwiZXhwIjoxNzEyMTczMTgwLCJlbWFpbCI6ImFkcmlhbmZlcm5hbmRlemRpYXpnQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZHJpYW5mZXJuYW5kZXpkaWF6Z0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VV6TGRbooVncAftrj2Jaq2Rt98POboawuQZE7XUxCWuKPw_fggp_ha8OuppX0kXmC4fKwTXwSwFjN0dT7XkPtF80S1Ccgy5TvmAxjR6BAYe6gS1ZhQq2GvoyWsT9qlkgvb4ZIpcHRHNnVF1FIGbDZzg1Fkdy46fUJbdfhgMAJyrI4W3khUBVoHTUVhd90SAAEFQ-dYKTTm1_Ojvb2uKv_GOZsoWxM8Y7TBJWh_YSRArb6CX8I3RTIpPhHIM8cqyo-wPmwhqHNaMquIoC39t2B5TU_P-YiVAufS8eSQPnTaYNPGi2v-lap5JqgvN3b66iQ4rEqjYqmnUMI1Wn2QkI4A';
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
