import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AlertModule } from 'ngx-bootstrap/alert';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
