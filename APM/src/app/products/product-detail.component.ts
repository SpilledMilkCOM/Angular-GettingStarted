import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // The paramter is not expected to change so using the "snapshot" method is fine.
    // If the paramater was going to change while on this page, then an observable should be used.

    // (Since get() returns a string, the '+' converts it to a number.)

    let id = +this.route.snapshot.paramMap.get('id');

    // For now hard-code some values since we're not reading from the service just yet.

    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    };
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
