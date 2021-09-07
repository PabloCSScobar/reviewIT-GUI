import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loader: LoadingService) {}
  timer: NodeJS.Timeout;
  count = 0;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.timer){
      clearTimeout(this.timer);
    }
    this.count++;
    this.loader.show();
    return next.handle(request).pipe(
      finalize(() => {
        this.count--;
        this.timer = setTimeout(() => this.loader.hide(), 700);
      })
    );
  }
}
