import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
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

  getToken() {
    return this.cookieService.get('Token');
  }

  login(loginData) {
    return this.http.post<any>(`${env.apiUrl}/auth/`, loginData).pipe(
      // tap( data => this.setToken(data.token)),
      tap((data) => this.router.navigate(['list']))
    );
  }

  logout() {
    // this.cookieService.delete('Token');
    this.router.navigate(['auth/login']);
  }

  register(registerData) {
    // return this.http.post(`${environment.apiUrl}/api/users/`, registerData).pipe(
    //   tap( () => this.router.navigate(['auth/login'], {queryParams: { registered: 'true' } }))
    // );
  }
}
