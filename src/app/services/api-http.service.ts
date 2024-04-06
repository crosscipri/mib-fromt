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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWliY2xpZW50cy1mZWQ1YiIsImF1ZCI6Im1pYmNsaWVudHMtZmVkNWIiLCJhdXRoX3RpbWUiOjE3MTIzOTU0OTAsInVzZXJfaWQiOiJWSFJyeHViUlRCUFVjMmZqNW4wSm1QcmN6d0oyIiwic3ViIjoiVkhScnh1YlJUQlBVYzJmajVuMEptUHJjendKMiIsImlhdCI6MTcxMjM5NTQ5MCwiZXhwIjoxNzEyMzk5MDkwLCJlbWFpbCI6ImFkcmlhbmZlcm5hbmRlemRpYXpnQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZHJpYW5mZXJuYW5kZXpkaWF6Z0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.d8utq35Z1kUasSMV1Y4Be0UTOujY6PMHN4lMJV-oPMAgjEpmLwwSkud7kdLWqxaj6mg68NPEePx1I2IZCcSh-QRfX4AxELZ7tVfqP0yKhWxtI4Cls3Z77zmW2ruynjFYV0feUJLvph-7B-Wwv5d79QWSAR0vB5URTbPbIJBCn9IvGARgNwCQup6Ex3rbcS16g-E82_6l_rMqQYi6Es-qAa59NtQJP393cGFcLlyDXbKfx2DmpVcxzmRzC8i2HoMMLFFNZiClCt06AwWTFH1c8KTX2Yu9qtJSQx1vwwZlb-1ALhphbIthPXFHKLXEF7f0LvdIslWQpod-Hhpid7i41A';
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
