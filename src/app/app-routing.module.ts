import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { CarPageComponent } from './car-page/car-page.component';
import { RentedCarPageComponent } from './rented-car-page/rented-car-page.component';

const routes: Routes = [
  {path:'', component:UserpageComponent},
  {path:'search/:searchTerm', component:UserpageComponent},
  {path:'tag/:tag', component:UserpageComponent},
  {path:'car/:id', component:CarPageComponent},
  {path:'rented', component:RentedCarPageComponent},
  {path:'car', component:CarPageComponent},
  {path:'userpage', component:UserpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
