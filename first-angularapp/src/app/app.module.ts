import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { GOTNameComponent } from './gotname/gotname.component';
import { from } from 'rxjs';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GOTNameComponent,
    DirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
