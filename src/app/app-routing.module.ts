import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component'
import {LoginComponent} from './login/login.component'
import {RegistrerComponent} from './registrer/registrer.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch : 'full'},
  {path: 'login', component : LoginComponent},
  {path : 'landing-page', component : LandingPageComponentComponent},
  {path : 'register', component : RegistrerComponent},
  {path : 'dashboard', component : DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
