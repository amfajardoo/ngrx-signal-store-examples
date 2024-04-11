import { ComponentFixture, TestBed } from '@angular/core/testing';
import ProductsComponent from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductStore } from '../../store/products.store';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent, HttpClientTestingModule],
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
