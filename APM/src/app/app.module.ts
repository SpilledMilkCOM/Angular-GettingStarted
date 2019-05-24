import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,    // So Angular can find the selector
    ConvertToSpacesPipe,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule     // Needed for ngModel
  ],
  bootstrap: [
    AppComponent    // This is the starting component of the application.
  ]
})
export class AppModule { }