import { Component, inject } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ReactiveFormsModule,
  FormGroup,
  NonNullableFormBuilder,
} from '@angular/forms';
import { InputComponent } from './input.component';

@Component({
  template: `
    <form [formGroup]="form">
      <app-input controlKey="title" [control]="form.controls.title" />
    </form>
  `,
})
class TestHostComponent {
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    title: this.fb.control(''),
  });
}

describe('InputComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let formGroup: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [ReactiveFormsModule, InputComponent],
    }).compileComponents();

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    formGroup = hostComponent.form;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
    // Access the InputComponent instance from the TestHostComponent
    const inputComponent = hostFixture.debugElement.query(
      (c) => c.name === 'app-input',
    ).componentInstance;
    expect(inputComponent).toBeTruthy();
  });

  it('should add control to parent form group on init', () => {
    expect(formGroup.contains('title')).toBeTrue();
    expect(formGroup.get('title')!.value).toEqual(''); // Optionally check the initial value
  });

  it('should remove control from parent form group on destroy', () => {
    hostFixture.destroy();
    expect(formGroup.contains('title')).toBeFalse();
  });
});
