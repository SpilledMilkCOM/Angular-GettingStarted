import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

// This uses a linked template in the relative path.

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent
  implements OnInit {   // Since ES2015 doesn't support interfaces this will be transpiled out, but it is good TypeScript practice to keep it in.

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  _listFilter: string;     // The underscore '_' signifies that there are get/set methods. (initialized in the constructor)
  showImage: boolean = false;

  // productService: ProductService;   Is defined below in the short hand by adding 'private' to the constructor's injected paramenter.

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  // Primarily used for initialization (very light weight code)
  // The 'private' productService is also scoped to the class (this seems bad)
  constructor(private productService: ProductService) {
    this.listFilter = 'cart';

    // Don't load the products here because it COULD take too much time if a database or endpoint is hit.
  }

  // We could have done event binding, but using get/set is more straightforward
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();      // For a case insensitive filter.

    // Use the built in 'filter' function of an array and the 'arrow' (anonymous delegate)

    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('ngOnInit() - Start');

    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
}