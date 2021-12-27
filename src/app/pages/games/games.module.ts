import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    GamesComponent
  ],
  exports: [
    GamesComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class GamesModule { }
