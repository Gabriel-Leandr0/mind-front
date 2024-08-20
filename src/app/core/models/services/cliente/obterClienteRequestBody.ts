import { PaginacaoRequest } from '@core/models/services/paginacaoRequest';

export class ObterClienteRequestBody extends PaginacaoRequest {
  constructor(
    public codCliente?: number,
    Pagina?: number,
    TamanhoPagina?: number,
    paginar?: boolean
  ) {
    super(Pagina, TamanhoPagina, paginar);
  }
}
