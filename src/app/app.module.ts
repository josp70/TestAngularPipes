import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { NgMathPipesModule } from 'angular-pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMathPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
