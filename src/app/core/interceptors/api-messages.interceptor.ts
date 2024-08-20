import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { TechscanApiResponse } from '@core/models/services/techscanApiResponse';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';

export const apiMessagesInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(ToastrService);
  return next(req).pipe(
    tap({
      next: event => {
        if (!(event instanceof HttpResponse)) {
          return;
        }

        const body = event.body as TechscanApiResponse;
        if (!body?.messages) {
          return;
        }

        for (const message of body.messages) {
          toastrService.success(message);
        }
      },
      error: ({ error }: HttpErrorResponse) => {
        const techscanApiResponse = error as TechscanApiResponse;
        if (!techscanApiResponse?.messages) {
          return;
        }

        for (const message of techscanApiResponse.messages) {
          toastrService.error(message, undefined, {
            timeOut: 0,
            extendedTimeOut: 0
          });
        }
      }
    })
  );
};
