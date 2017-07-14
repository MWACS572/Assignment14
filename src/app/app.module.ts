import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home.component";
import {StudentsComponent} from "./students.component";
import { myRoutes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes // add it to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
