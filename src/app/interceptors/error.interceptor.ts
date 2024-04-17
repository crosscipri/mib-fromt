import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        console.log(error);
        if (error.error) {
          errorMsg = `Error: ${error.error.showMessage}`;
        } else {
          if (error.status === 401) {
            return EMPTY;
          }
          errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
        }
        this.alertService.show(errorMsg, 'danger');
        return throwError(errorMsg);
      }),
    );
  }
}
