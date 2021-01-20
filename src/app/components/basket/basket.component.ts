import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/index';

@Component({
  selector: 'fruit-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketTotal: number;

  constructor(
    private basketService: BasketService
  ) {

  }


  ngOnInit() {
    this.basketService.basketTotal.subscribe(total => {
      this.basketTotal = total;
    });
  }

}
