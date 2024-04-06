import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public isLoading = new BehaviorSubject(false);

  show() {
    setTimeout(() => this.isLoading.next(true));
  }

  hide() {
    setTimeout(() => this.isLoading.next(false));
  }
}
