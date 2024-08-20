import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AutenticarService } from '@core/services/autenticar.service';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const autenticarService = inject(AutenticarService);
  return next(req).pipe(
    tap({
      error: ({ status }: HttpErrorResponse) => {
        if (status === 401) {
          autenticarService.sair();
        }
      }
    })
  );
};
