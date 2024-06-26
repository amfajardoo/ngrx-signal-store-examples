import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Product } from '../../models/product';
import { pipe, switchMap, tap } from 'rxjs';
import { inject } from '@angular/core';
import { ProductService } from '../../services/product-service/product.service';
import { computedAsync } from '../../utils';

interface ProductState {
  products: Product[];
}

const initialProductState: ProductState = {
  products: [],
};

export function withProduct() {
  return signalStoreFeature(
    withState(initialProductState),
    withComputed(() => {
      const productService = inject(ProductService);

      return {
        productsComputed: computedAsync(() => productService.getProducts()),
      };
    }),
    withMethods((store) => {
      const productService = inject(ProductService);
      return {
        load: rxMethod<void>(
          pipe(
            switchMap(() =>
              productService.getProducts().pipe(
                tap((products) => {
                  patchState(store, { products });
                }),
              ),
            ),
          ),
        ),
      };
    }),
  );
}
