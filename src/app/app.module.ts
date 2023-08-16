// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// //import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { DashboardComponent } from './dashboard/dashboard.component';


// @NgModule({
//   declarations: [AppComponent, HomeComponent, DashboardComponent],
//   imports: [BrowserModule, AppRoutingModule, HttpClientModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

// Import StoreModule and NgRx-related modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Import your data reducer
import { dataReducer } from './data.reducer';
import { DataEffects } from './data.effects'; // Make sure you have defined DataEffects in this file

@NgModule({
  declarations: [AppComponent, HomeComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // Set up the StoreModule with your reducer and effects
    StoreModule.forRoot({ data: dataReducer }), // Adjust 'data' to match your state property
    EffectsModule.forRoot([DataEffects]), // Add your DataEffects class here
    StoreDevtoolsModule.instrument(), // Add this if you want to use NgRx Devtools
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

