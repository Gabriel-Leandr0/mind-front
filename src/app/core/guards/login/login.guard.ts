import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AutenticarService } from '@core/services/autenticar.service';

export const loginGuard: CanActivateFn = () => {
  const authService = inject(AutenticarService);
  return authService.isAuthenticatedAndTokenValid();
};
