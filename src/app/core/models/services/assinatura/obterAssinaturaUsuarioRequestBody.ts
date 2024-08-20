import { PaginacaoRequest } from '@core/models/services/paginacaoRequest';

export class ObterAssinaturaUsuarioRequestBody extends PaginacaoRequest {
  constructor(
    public codAssinatura?: number,
    Pagina?: number,
    TamanhoPagina?: number,
    paginar?: boolean
  ) {
    super(Pagina, TamanhoPagina, paginar);
  }
}
