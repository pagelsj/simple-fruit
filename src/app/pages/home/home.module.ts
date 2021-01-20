import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  FruitTileComponent,
  BasketComponent
} from '../../components/index';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
    FruitTileComponent,
    BasketComponent,
    HomeComponent
  ]
})
export class HomePageModule{ }
