import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // This was imported from selenium by default. 'selenium-webdriver/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators"

import { IProduct } from "./product";

@Injectable({
  providedIn: 'root'    // Recommended practice, versus defining providers in the Component arguments.
})
export class ProductService {

  // The angular.json file's assets have been adjusted to include this data file.

  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  //----==== PRIVATE ====--------------------------------------------------------------------------

  private handleError(err: HttpErrorResponse)
  {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }

}