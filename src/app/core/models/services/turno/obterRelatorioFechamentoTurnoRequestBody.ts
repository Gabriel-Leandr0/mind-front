import { PaginacaoRequest } from '@core/models/services/paginacaoRequest';

export class ObterRelatorioFechamentoTurnoRequestBody extends PaginacaoRequest {
  constructor(
    public codTurno?: number,
    Pagina?: number,
    TamanhoPagina?: number,
    paginar?: boolean
  ) {
    super(Pagina, TamanhoPagina, paginar);
  }
}
