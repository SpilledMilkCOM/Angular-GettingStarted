import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
  ];

  constructor()
  {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
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
  }
}