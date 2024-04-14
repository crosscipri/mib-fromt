import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, EMPTY } from 'rxjs';
import { catchError, switchMap, filter, take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null,
  );

  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (!this.isLoginOrRefreshRequest(request)) {
      if (localStorage.getItem('idToken')) {
        request = this.addToken(
          request,
          localStorage.getItem('idToken') as string,
        );
      }
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (
          (error instanceof HttpErrorResponse && error.status === 401) ||
          error.includes('401')
        ) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      }),
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService
        .refreshToken(localStorage.getItem('refreshToken') as string)
        .pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(token.idToken);
            return next.handle(this.addToken(request, token.idToken));
          }),
          catchError((error) => {
            this.authService.logout();
            if (error.status !== 401) {
              return throwError(error);
            } else {
              return EMPTY;
            }
          }),
          tap(() => {
            location.reload();
          }),
        );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((jwt) => {
          return next.handle(this.addToken(request, jwt));
        }),
      );
    }
  }

  private isLoginOrRefreshRequest(request: HttpRequest<any>): boolean {
    const { url } = request;
    return url.endsWith('/login') || url.endsWith('/login/refresh');
  }
}
