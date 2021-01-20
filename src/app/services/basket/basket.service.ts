import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  total = 0.00;
  basketTotal: BehaviorSubject<number>;

  constructor() {
    this.basketTotal = new BehaviorSubject(this.total);
  }

  add(price) {
    this.total += price;
    this.basketTotal.next(this.total);

    console.log('price', price);
    console.log(this.total);
  }
}
