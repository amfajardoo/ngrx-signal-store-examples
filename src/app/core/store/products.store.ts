import { signalStore, withHooks } from '@ngrx/signals';
import { withLogger } from './features/logger.feature';
import { withProduct } from './features/products.feature';

export const ProductStore = signalStore(
  { providedIn: 'root' },
  withLogger('products'),
  withProduct(),
  withHooks({
    onInit({ load }) {
      load();
    },
  }),
);
