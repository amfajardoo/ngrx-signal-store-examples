import { ProductStore } from './../../../core/store/products.store';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InputComponent } from '../../../ui/input/input.component';
import { Product } from '../../../core/models/product';
import { startWith, tap } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    InputComponent,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    AsyncPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export default class ProductsComponent {
  productStore = inject(ProductStore);
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    title: this.fb.control(''),
    price: this.fb.control(''),
  });
  filteredProducts = signal<Product[]>([]);

  constructor() {
    this.form.controls.title.valueChanges.pipe(
      startWith(''),
      tap(console.log),
      tap((title) =>
        title
          ? this.filteredProducts.set(this._filterProducts(title))
          : this.productStore.products().slice(),
      ),
    );
  }

  private _filterProducts(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.productStore
      .products()
      .filter((state) => state.title.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
