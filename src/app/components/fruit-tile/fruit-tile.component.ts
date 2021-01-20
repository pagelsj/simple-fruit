import {
  Component,
  Input
} from '@angular/core';
import { BasketService } from '../../services/index';

import { FruitInterface } from '../../interfaces/fruit.interface';

@Component({
  selector: 'fruit-tile',
  templateUrl: './fruit-tile.component.html',
  styleUrls: ['./fruit-tile.component.scss']
})
export class FruitTileComponent {
  @Input() fruit: FruitInterface;

  constructor(
    private basketService: BasketService
  ) { }

  addToBasket(price) {
    this.basketService.add(price);
  }
}
