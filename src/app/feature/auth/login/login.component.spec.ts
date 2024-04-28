import { ComponentFixture, TestBed } from '@angular/core/testing';
import LoginComponent from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../auth.service';
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
import { of } from 'rxjs';
import { LoginResponse } from '../models/auth';

const mockLoginResponse: LoginResponse = {
  id: 15,
  username: 'kminchelle',
  email: 'kminchelle@qq.com',
  firstName: 'ANDRES',
  lastName: 'FAJARDO',
  gender: 'female',
  image: 'https://robohash.org/Jeanne.png?set=set4',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxNDMyNDM5NywiZXhwIjoxNzE0MzI3OTk3fQ.K4EnoAa1AzZrMKflkgnK7WemakNaiXcDFD9VVqCkvWA',
};

class AuthServiceStub {
  login() {
    return of(mockLoginResponse);
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: Spy<AuthService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientTestingModule],
      providers: [
        // { provide: AuthService, useValue: createSpyFromClass(AuthService) },
        { provide: AuthService, useClass: AuthServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authService = TestBed.inject<any>(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call authService.login', () => {
    const result = authService.login.and.callFake(() => {
      return of(mockLoginResponse);
    });

    expect(result).toBeTruthy();
  });

  xit('should call authService.login and change from name ANDRES to MAURICIO', () => {
    expect(component.userData()).toEqual(mockLoginResponse);
    const data = { ...component.userData(), firstName: 'MAURICIO' };
    expect(data).toEqual({ ...mockLoginResponse, firstName: 'MAURICIO' });
  });
});
