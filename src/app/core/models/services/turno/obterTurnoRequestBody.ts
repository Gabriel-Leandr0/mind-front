import { PaginacaoRequest } from '@core/models/services/paginacaoRequest';

export class ObterTurnoRequestBody extends PaginacaoRequest {
  constructor(
    public codCliente?: string,
    public dataInicial?: string,
    public dataFinal?: string,
    public nomMatricula?: string,
    Pagina?: number,
    TamanhoPagina?: number,
    paginar?: boolean
  ) {
    super(Pagina, TamanhoPagina, paginar);
  }
}
