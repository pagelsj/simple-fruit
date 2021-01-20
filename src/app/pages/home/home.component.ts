import { Component, OnInit } from '@angular/core';

import { FruitInterface } from '../../interfaces/fruit.interface';

@Component({
  selector: 'fruit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fruitList: Array<FruitInterface> = [
    {
      title: 'Orange',
      image: '/assets/orange.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget tempus magna, at tempor sem.',
      price: 0.5
    },
    {
      title: 'Apple',
      image: '/assets/apple.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget tempus magna.',
      price: 0.75
    },
    {
      title: 'Banana',
      image: '/assets/banana.jpg',
      description: 'Lorem ipsum dolor sit amet, Integer eget tempus magna, at tempor sem.',
      price: 1.05
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
