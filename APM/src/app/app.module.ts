import { BrowserModule } from '@angular/platform-browser';    // This should only be imported in the app.module
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,    // So Angular can find the selector
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,        // The CLI was supposed to add this with the "-m" option, but it didn't
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [
    AppComponent    // This is the starting component of the application.
  ]
})
export class AppModule { }