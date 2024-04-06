import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
  activeRequests: number = 0;

  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    let params: HttpParams = request.params;
    const ignoreSpinner = params.get('ignoreSpinner');
    if (!ignoreSpinner) {
      if (this.activeRequests === 0) {
        this.spinnerService.show();
      }
      this.activeRequests++;
    } else {
      params = params.delete('ignoreSpinner');
      request = request.clone({ params });
    }

    return next.handle(request).pipe(
      finalize(() => {
        if (!ignoreSpinner) {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            this.spinnerService.hide();
          }
        }
      }),
    );
  }
}
