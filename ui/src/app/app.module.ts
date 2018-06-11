import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRouting} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import {IsvalidPipe} from './shared/pipes/isvalid.pipe';
import { PublicComponent } from './public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IsvalidPipe,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
