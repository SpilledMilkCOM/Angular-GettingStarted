// Much of this file was generated using "ng g m products/product --flat -m app"

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', /* TODO: Don't forget to add the Guard here. */ component: ProductDetailComponent },
    ]),
    SharedModule        // The CLI was supposed to add this with the "-m" option, but it didn't
  ]
})
export class ProductModule { }
