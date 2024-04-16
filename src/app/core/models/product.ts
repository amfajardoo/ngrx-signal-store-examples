import { FormControl } from '@angular/forms';

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ProductForm {
  title: FormControl<string>;
  price: FormControl<string>;
}
