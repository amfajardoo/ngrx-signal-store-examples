import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginResponse } from './models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  url = 'https://dummyjson.com/auth';

  constructor() {}

  login(
    username: string = 'kminchelle',
    password: string = '0lelplR',
  ): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/login`, {
      username,
      password,
    });
  }
}
