import { FormControl } from '@angular/forms';

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  categories?: string[]; // Array<string>; -> Array type using 'Array<string>' is forbidden. Use 'string[]' instead.
}

export interface ProductForm {
  title: FormControl<string>;
  price: FormControl<string>;
}
