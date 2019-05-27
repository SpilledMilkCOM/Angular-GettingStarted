// Much of this file was generated using the Angular CLI (ng generate guard)
// > ng g g products/product-detail

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // The index of [1] is the 'id' parameter.
    let id = +next.url[1].path;

    if (isNaN(id) || id < 1) {
      // Normally this would redirect to an error page, but that can be done later.
      alert("Invalid product Id");
      this.router.navigate(['/products']);
      return false;
    }

    return true;
  }
}
