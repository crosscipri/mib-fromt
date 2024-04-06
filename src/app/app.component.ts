import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private router: Router,
    private alertService: AlertService,
  ) {}

  alertSubject$ = this.alertService.alertSubject;

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
