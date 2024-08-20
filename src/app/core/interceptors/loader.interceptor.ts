import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '@core/services/loader.service';
import { finalize } from 'rxjs';

let requestCount = 0;
export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  ++requestCount;
  const loaderService = inject(LoaderService);
  loaderService.abrir();
  return next(req).pipe(
    finalize(() => {
      --requestCount;
      if (requestCount === 0) {
        loaderService.fechar();
      }
    })
  );
};
