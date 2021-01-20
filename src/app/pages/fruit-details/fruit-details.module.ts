import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitDetailsComponent } from './fruit-details.component';

const routes: Routes = [
  {
    path: 'details/:fruit',
    component: FruitDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
    FruitDetailsComponent
  ]
})
export class FruitDetailsPageModule{ }
