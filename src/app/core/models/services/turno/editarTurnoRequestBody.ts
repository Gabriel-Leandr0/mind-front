import moment from 'moment';

import { DetalhesTurno } from './detalhesTurno';

export class EditarTurnoRequestBody {
  constructor(
    public codTurno: number = 0,
    public codCliente: number = 0,
    public dtaData: string = moment().toJSON(),
    public numInspecionado: number = 0,
    public numSuspeito: number = 0,
    public numIsotanksInfla: number = 0,
    public numTempo: number = 0,
    public nomObs: string = '',
    public codUsuario: number = 0,
    public nomGasAcc: string = '',
    public nomKu35: string = '',
    public nomArCc: string = '',
    public nomCabine: string = '',
    public nomAvarias: string = '',
    public nomDosimetro: string = '',
    public nomPlacas: string = '',
    public nomAfericao: string = '',
    public nomKu35Rh1: string = '',
    public nomAvariasObs: string = '',
    public detalhesTurno: DetalhesTurno[] = []
  ) {}
  numIsotanks?: number;
  nomVisitas?: string;
  nomLimpeza?: string;
}
