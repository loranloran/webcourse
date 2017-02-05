import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2mapComponent } from './lesson2map/lesson2map.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2mapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [Lesson1Component]
})
export class AppModule { }
