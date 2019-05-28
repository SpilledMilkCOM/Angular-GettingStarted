// Much of this file was generated using "ng g m products/product --flat -m app"

import { CommonModule } from '@angular/common';   // This is needed for *ngIf and *ngFor, and you can't import the BrowserModule here.
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { StarComponent } from '../shared/start.component';


@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    ProductDetailComponent,
    ProductListComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', /* TODO: Don't forget to add the Guard here. */ component: ProductDetailComponent },
    ])
  ]
})
export class ProductModule { }
