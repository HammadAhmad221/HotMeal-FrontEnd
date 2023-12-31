// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { HttpClientModule } from '@angular/common/http';
// import { DashboardComponent } from './dashboard/dashboard.component';


// @NgModule({
//   declarations: [AppComponent, HomeComponent, DashboardComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResturantStoreModule } from './store/resturant/resturant.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RestaurantPageComponent} from './restaurant-page/restaurant-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
// import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
     RestaurantPageComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    // Other components and directives...
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}), // Import your reducers here if needed
    EffectsModule.forRoot([]), // Import your effects here if needed
    AppRoutingModule,
    CommonModule,
    ResturantStoreModule, // Import your custom store module here
    FormsModule
    // SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

