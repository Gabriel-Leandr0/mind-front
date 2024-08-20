import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginacaoResponseData } from '@core/models/services/paginacaoResponseData';
import { TechscanApiResponse } from '@core/models/services/techscanApiResponse';
import { ObterUsuarioRequestBody } from '@core/models/services/usuario/obterUsuarioRequestBody';
import { ObterUsuarioResponseRegistro } from '@core/models/services/usuario/obterUsuarioResponseRegistro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL: string = 'Usuario';
  constructor(private httpClient: HttpClient) {}
  obterUsuario(
    body: ObterUsuarioRequestBody
  ): Observable<
    TechscanApiResponse<PaginacaoResponseData<ObterUsuarioResponseRegistro>>
  > {
    return this.httpClient.post<
      TechscanApiResponse<PaginacaoResponseData<ObterUsuarioResponseRegistro>>
    >(`${this.baseURL}/ObterUsuario`, body);
  }

  public GetAllUsuarios(
    paginacao: any,
    pesquisa: any,
    { onSuccess, onError }: any
  ) {
    var link =
      this.baseURL +
      `/Usuarios/Filtrado?Pagina=` +
      (paginacao.Pagina || '0') +
      `&TamanhoPagina=` +
      (paginacao.TamanhoPagina || '10');

    if (pesquisa.hasOwnProperty('Email')) {
      link += `&Email=${encodeURIComponent(
        '%' + pesquisa.Email.toLowerCase() + '%'
      )}`;
    }

    if (pesquisa.hasOwnProperty('PerfilId')) {
      link += `&PerfilId=` + (pesquisa.PerfilId || '');
    }

    if (pesquisa.hasOwnProperty('Ativo') && pesquisa.Ativo != null) {
      link += `&Ativo=` + pesquisa.Ativo;
    }
    this.httpClient
      .get(link, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          type: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .subscribe({
        next: response => {
          return onSuccess(response);
        },
        error: onError
      });
  }

  public PostUsuario(body: any, { onSuccess, onError }: any) {
    this.httpClient
      .post(this.baseURL, body, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          type: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .subscribe({
        next: response => {
          return onSuccess(response);
        },
        error: onError
      });
  }

  public PatchUsuario(id: number, body: any, { onSuccess, onError }: any) {
    this.httpClient
      .patch(this.baseURL + '/' + id, body, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          type: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .subscribe({
        next: response => {
          return onSuccess(response);
        },
        error: onError
      });
  }

  public PutUsuario(id: number, body: any, { onSuccess, onError }: any) {
    this.httpClient
      .put(this.baseURL + '/' + id, body, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          type: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .subscribe({
        next: response => {
          return onSuccess(response);
        },
        error: onError
      });
  }
}
