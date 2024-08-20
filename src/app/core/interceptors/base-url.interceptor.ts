import { HttpInterceptorFn } from '@angular/common/http';
// import { environment } from '@environment';
import { environment } from 'environments/environment.local';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.match(/(?::\/\/)/)) {
    return next(req);
  }
  const clonedRequest = req.clone({
    url: `${environment.baseURL}${req.url}`
  });
  return next(clonedRequest);
};
