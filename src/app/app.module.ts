import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingFormComponentComponent } from './components/testing-form-component/testing-form-component.component';
import { LoginComponentComponent } from './components/usermanagement/login-component/login-component.component';
import { SignUpComponentComponent } from './components/usermanagement/sign-up-component/sign-up-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TestingFormComponentComponent,
    LoginComponentComponent,
    SignUpComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
