import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class userResolver implements Resolve<any> {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    if (this.authService.isAuthenticated()) {
      return this.userService.getUsername();
    }
    return true;
  }
}
