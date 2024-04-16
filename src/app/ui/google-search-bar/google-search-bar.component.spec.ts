import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSearchBarComponent } from './google-search-bar.component';

describe('GoogleSearchBarComponent', () => {
  let component: GoogleSearchBarComponent;
  let fixture: ComponentFixture<GoogleSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleSearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
