import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseURL: string = 'Perfil';
  constructor(private httpClient: HttpClient) {}
  // obterUsuario(body: ObterUsuarioRequestBody): Observable<
  //   TechscanApiResponse<PaginacaoResponseData<ObterUsuarioResponseRegistro>>> {
  //   return this.httpClient.get<
  //     TechscanApiResponse<PaginacaoResponseData<ObterUsuarioResponseRegistro>>
  //   >(`${this.baseURL}/ObterUsuario`, body);
  // }

  public getAllProfile({ onSuccess, onError }: any) {
    var link = `${this.baseURL}/Perfis`;

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
}
