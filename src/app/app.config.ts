import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import {
  QueryClient,
  provideAngularQuery,
} from '@tanstack/angular-query-experimental';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAngularQuery(new QueryClient()),
    provideRouter(routes),
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (authService: AuthService) => {
        return new AuthInterceptor(authService);
      },
      multi: true,
      deps: [AuthService],
    },
  ],
};
