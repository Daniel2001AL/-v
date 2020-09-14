import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component'

const routes: Routes = [
  {path : '', redirectTo: 'landing-page', pathMatch : 'full'},
  {path : 'landing-page', component : LandingPageComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
