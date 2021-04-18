import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { environment as env } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  setToken(token) {
    this.cookieService.set('Token', token);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getToken() {
    return this.cookieService.get('Token');
  }

  login(loginData): Observable<any> {
    console.log('login');
    return this.http.post<any>(env.authUrl, loginData).pipe(
      tap((data) => this.setToken(data.token)),
      tap(() => this.router.navigate(['list']))
    );
  }

  logout() {
    this.cookieService.delete('Token');
    this.router.navigate(['auth/login']);
  }

  register(registerData): Observable<any> {
    return this.http.post(`${env.apiUrl}/users/`, registerData).pipe(
      tap(() =>
        this.router.navigate(['auth/login'], {
          queryParams: { registered: true },
        })
      )
    );
  }
}
