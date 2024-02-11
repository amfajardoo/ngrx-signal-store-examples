import { Component, inject, effect } from '@angular/core';
import { ProductStore } from '../../store/products.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export default class ProductsComponent {
  productStore = inject(ProductStore);
}
