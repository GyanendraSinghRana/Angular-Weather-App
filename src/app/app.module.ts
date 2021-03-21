import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { WeatherService } from './services/weather.service';
import { CommonUtilService } from './services/common-util.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityCardComponent } from './city-card/city-card.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CityCardComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    CommonUtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
