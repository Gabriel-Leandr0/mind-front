import { inject } from '@angular/core';
import { AutenticarService } from '@core/services/autenticar.service';

export const tokenGetter = () => {
  const autenticarService = inject(AutenticarService);
  return autenticarService.token() ?? '';
};
