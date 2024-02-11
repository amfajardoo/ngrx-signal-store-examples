import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  #http = inject(HttpClient);
  #fakeStoreApiUrl = 'https://fakestoreapi.com';
  #productsRoute = 'products';

  getProducts(): Observable<Product[]> {
    return this.#http.get<Product[]>(
      `${this.#fakeStoreApiUrl}/${this.#productsRoute}`
    );
  }
}
