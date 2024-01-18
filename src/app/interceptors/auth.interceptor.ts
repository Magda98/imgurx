import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authService.accessToken.pipe(
      switchMap((token) => {
        if (token) {
          const modifiedReq = req.clone({
            headers: req.headers
              .set('Authorization', `Bearer ${token}`)
              .set('Accept', '*/*'),
            url: `https://api.imgur.com/3/${req.url}`,
          });

          return next.handle(modifiedReq);
        }

        return next.handle(req);
      })
    );
  }
}
