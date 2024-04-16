import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductStore } from '../../../core/store/products.store';
import { InputComponent } from '../../../ui/input/input.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule, InputComponent],
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

  onSubmit() {
    console.log(this.form.value);
  }
}
