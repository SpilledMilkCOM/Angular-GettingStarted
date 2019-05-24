import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/start.component';

@NgModule({
  declarations: [
    AppComponent,    // So Angular can find the selector
    ConvertToSpacesPipe,
    ProductListComponent,
    StarComponent
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