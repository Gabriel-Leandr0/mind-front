import { PaginacaoRequest } from '@core/models/services/paginacaoRequest';

export class ObterUsuarioRequestBody extends PaginacaoRequest {
  constructor(
    public codUsuario?: number,
    public nomMatricula?: string,
    Pagina?: number,
    TamanhoPagina?: number,
    paginar?: boolean
  ) {
    super(Pagina, TamanhoPagina, paginar);
  }
}
