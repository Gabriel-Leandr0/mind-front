import { PaginacaoRequest } from '@core/models/services/paginacaoRequest';

export class ObterAssinaturaRequestBody extends PaginacaoRequest {
  constructor(
    public codAssinatura?: number,
    public dtaInicial?: string,
    public dtaFinal?: string,
    public codCliente?: number,
    public nomCodigo?: string,
    public codUsuario?: number,
    public nomStatus?: string,
    Pagina?: number,
    TamanhoPagina?: number,
    paginar?: boolean
  ) {
    super(Pagina, TamanhoPagina, paginar);
  }
}
