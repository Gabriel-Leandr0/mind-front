import { PaginacaoRequest } from '@core/models/services/paginacaoRequest';

export class ObterMedidorRequestBody extends PaginacaoRequest {
  constructor(
    public codCliente?: number,
    public codRpMedidor?: number,
    public nomSituacaoMedidores?: string[],
    public nomRpMedidor?: string,
    Pagina?: number,
    TamanhoPagina?: number,
    paginar?: boolean
  ) {
    super(Pagina, TamanhoPagina, paginar);
  }
}
