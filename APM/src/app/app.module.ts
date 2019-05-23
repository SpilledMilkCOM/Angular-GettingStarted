import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    // So Angular can find the selector
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent  // This is the starting component of the application.
  ]
})
export class AppModule { }
