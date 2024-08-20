import moment from 'moment';

import { PontosCroqui } from './pontosCroqui';

export class CadastrarLevantamento7bRequestBody {
  constructor(
    public codCliente?: number,
    public dtaInicio: string = moment().toJSON(),
    public codMedidor?: number,
    public numBg?: number,
    public nomUnidade?: string,
    public nomIdImagem?: string,
    public nomObs?: string,
    public pontosCroqui: PontosCroqui[] = []
  ) {}
}
