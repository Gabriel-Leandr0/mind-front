import moment from 'moment';

import { PontosCroqui } from './pontosCroqui';

export class SalvarCabineExposicaoRequestBody {
  constructor(
    public codCliente: number = 0,
    public dtaInicio: string = moment().toJSON(),
    public codMedidor: number = 0,
    public codOperador: number = 0,
    public nomObs: string = '',
    public numBg: number = 0,
    public pontosCroqui: PontosCroqui[] = []
  ) {}
}
