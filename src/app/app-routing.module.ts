import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { CarPageComponent } from './car-page/car-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'user', component:UserpageComponent},
  {path:'car', component:CarPageComponent},
  {path:'login', component:LoginpageComponent},
  {path:'search/:searchTerm', component:UserpageComponent},
  {path:'tag/:tag', component:UserpageComponent},
  {path:'car/:id', component:CarPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
