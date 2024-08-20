import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi
} from '@angular/common/http';
import { importProvidersFrom, NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '@environment';

import { apiMessagesInterceptor } from './interceptors/api-messages.interceptor';
import { authInterceptor } from './interceptors/auth.interceptor';
import { baseUrlInterceptor } from './interceptors/base-url.interceptor';
import { loaderInterceptor } from './interceptors/loader.interceptor';
import { tokenGetter } from './utils/tokenGetter';

@NgModule({
  declarations: [],
  providers: [
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: environment.dominiosComAutenticacao,
          disallowedRoutes: environment.rotasSemAutenticacao
        }
      })
    ),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([
        baseUrlInterceptor,
        loaderInterceptor,
        apiMessagesInterceptor,
        authInterceptor
      ])
    )
  ],
  imports: [CommonModule]
})
export class CoreModule {}
