import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CarPageComponent } from './car-page/car-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RentedCarPageComponent } from './rented-car-page/rented-car-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginpageComponent,
    UserpageComponent,
    SearchComponent,
    TagsComponent,
    CarPageComponent,
    RentedCarPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
