import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpService } from 'src/app/restaurant-api.service';
import { ResturantReducer } from './resturant.reducer';
import { ResturantEffects } from './resturant.effects';



@NgModule({
  declarations: [],
  providers:[HttpService],
  imports: [
    CommonModule,
    StoreModule.forFeature('resturant',ResturantReducer),
    EffectsModule.forFeature([ResturantEffects])
  ],
  exports:[
    StoreModule,
    EffectsModule
  ]
})
export class ResturantStoreModule { }
