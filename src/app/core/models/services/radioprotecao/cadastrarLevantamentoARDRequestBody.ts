import moment from 'moment';

import { PontosCroqui } from './pontosCroqui';

export class CadastrarLevantamentoARDRequestBody {
  constructor(
    public codCliente?: number,
    public dtaInicio: string = moment().toJSON(),
    public codMedidor?: number,
    public numBg?: number,
    public nomObs?: string,
    public pontosCroqui: PontosCroqui[] = []
  ) {}
}
