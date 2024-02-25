import { Component, inject, effect } from '@angular/core';
import { ProductStore } from '../../store/products.store';
import { JsonPipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Product, ProductForm } from '../../models/product';
import { InputComponent } from '../../components/input/input.component';

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
