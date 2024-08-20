import { PaginacaoRequest } from '../paginacaoRequest';

export class obterListaMestraRequestBody extends PaginacaoRequest {
  constructor(Pagina?: number, TamanhoPagina?: number, paginar?: boolean) {
    super(Pagina, TamanhoPagina, paginar);
  }
}
