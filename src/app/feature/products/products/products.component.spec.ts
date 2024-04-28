import { ComponentFixture, TestBed } from '@angular/core/testing';
import ProductsComponent from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductStore } from '../../../core/store/products.store';
import { JsonPipe, AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InputComponent } from '../../../ui/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductsComponent,
        HttpClientTestingModule,
        JsonPipe,
        ReactiveFormsModule,
        InputComponent,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        AsyncPipe,
        BrowserAnimationsModule,
      ],
      providers: [ProductStore],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
