import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
  alertSubject = new Subject<{ message: string; type: string }>();

  show(message: string, type: string) {
    this.alertSubject.next({ message, type });
  }
}
