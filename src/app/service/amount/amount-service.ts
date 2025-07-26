import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AmountService {
  private amountSubject = new BehaviorSubject<number>(0);
  amount$ = this.amountSubject.asObservable();

  setAmount(amount: number): void {
    this.amountSubject.next(amount);
  }
}
