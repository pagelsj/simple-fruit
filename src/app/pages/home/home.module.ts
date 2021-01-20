import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  FruitTileComponent,
  BasketComponent
} from '../../components/index';
import { BasketService } from '../../services/index';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FruitTileComponent,
    BasketComponent,
    HomeComponent
  ],
  providers: [
    BasketService
  ]
})
export class HomePageModule{ }
