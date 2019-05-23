import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,    // So Angular can find the selector
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent  // This is the starting component of the application.
  ]
})
export class AppModule { }