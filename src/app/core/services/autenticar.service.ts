import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EStorageKey } from '@core/enums/EStorageKey';
import { AutenticarRequestBody } from '@core/models/services/autenticar/autenticarRequestBody';
import { AutenticarResponseData } from '@core/models/services/autenticar/autenticarResponseData';
import { RedefinirRequestBody } from '@core/models/services/autenticar/redefinirRequestBody';
import { TokenPayload } from '@core/models/services/autenticar/tokenPayload';
import { TechscanApiResponse } from '@core/models/services/techscanApiResponse';
import { jwtDecode } from 'jwt-decode';
import moment from 'moment';
import { Observable, tap } from 'rxjs';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {
  private baseURL: string = 'Usuario';
  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}
  isAuthenticatedAndTokenValid() {
    return true;
  }
  autenticar(
    body: AutenticarRequestBody
  ): Observable<TechscanApiResponse<AutenticarResponseData>> {
    return this.http
      .post<TechscanApiResponse<AutenticarResponseData>>(
        `${this.baseURL}/Autenticar`,
        body
      )
      .pipe(
        tap((response: any) => {
          this.storageService.armazenarLocal(
            EStorageKey.TOKEN,
            response.Data.Result.Token.Token
          );
        })
      );
  }

  enviarEmailRedefinicao(
    email: string
  ): Observable<TechscanApiResponse<AutenticarResponseData>> {
    return this.http.post<TechscanApiResponse<AutenticarResponseData>>(
      `${this.baseURL}/EsqueceuSenha`,
      { email }
    );
  }
  redefinirSenha(
    body: any
  ): Observable<TechscanApiResponse<AutenticarResponseData>> {
    return this.http.patch<TechscanApiResponse<AutenticarResponseData>>(
      `${this.baseURL}/ResetSenha`,
      body
    );
  }

  sair() {
    this.storageService.limparLocal();
    this.router.navigate(['/login']);
  }
  token() {
    return this.storageService.retornarLocal<string>(EStorageKey.TOKEN);
  }
  tokenPayload() {
    const token = this.storageService.retornarLocal<string>(EStorageKey.TOKEN);
    if (!token) {
      return undefined;
    }

    const tokenPayload: TokenPayload = jwtDecode(token);
    if (typeof tokenPayload.codClientes === 'string') {
      tokenPayload.codClientes = JSON.parse(tokenPayload.codClientes);
    }
    return tokenPayload;
  }
}
