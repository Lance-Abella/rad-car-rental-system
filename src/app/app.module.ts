import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarsForRentComponent } from './cars-for-rent/cars-for-rent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginpageComponent,
    LandingPageComponent,
    CarsForRentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
