import { CanActivateFn } from '@angular/router';

export const turnoGuard: CanActivateFn = (route, state) => {
  return true;
};
