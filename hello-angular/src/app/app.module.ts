import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FirstComponent} from './first/first.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
