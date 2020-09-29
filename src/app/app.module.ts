import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponentComponent,
    LoginComponent,
    RegistrerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
