import { PaginacaoRequest } from '@core/models/services/paginacaoRequest';
import moment from 'moment';

export class ObterPesquisaProcedimentoRequestBody extends PaginacaoRequest {
  constructor(
    public codCliente: number[] = [0],
    public dataInicial: string = moment().toJSON(),
    public dataFinal: string = moment().toJSON(),
    public codMedidor: number = 0,
    public nomDescricao: string = '',
    public nomStatus: string = '',
    public nomMotivo: string = '',
    public nomObs: string = '',
    Pagina?: number,
    TamanhoPagina?: number,
    paginar?: boolean
  ) {
    super(Pagina, TamanhoPagina, paginar);
  }
}
