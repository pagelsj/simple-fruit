import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'fruit-tile',
  templateUrl: './fruit-tile.component.html',
  styleUrls: ['./fruit-tile.component.scss']
})
export class FruitTileComponent implements OnInit {
  @Input() fruit;
  constructor() { }

  ngOnInit() {
  }

}
