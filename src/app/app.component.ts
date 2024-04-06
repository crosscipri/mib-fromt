import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './services/alert.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private router: Router,
    private alertService: AlertService,
    public spinnerService: SpinnerService,
  ) {}

  alertSubject$ = this.alertService.alertSubject;
  isLoading$ = this.spinnerService.isLoading;

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
