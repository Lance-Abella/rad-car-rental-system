import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsForRentComponent } from './cars-for-rent/cars-for-rent.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'cars-for-rent', component: CarsForRentComponent},
  {path: 'loginpage', component: LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
