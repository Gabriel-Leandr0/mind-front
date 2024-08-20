import moment from 'moment';

export class SalvarCabineIntegradaRequestBody {
  constructor(
    public codCliente: number = 0,
    public codOperador: number = 0,
    public dtaInicio: string = moment().toJSON(),
    public codMedidor: number = 0,
    public nomObs: string = '',
    public numBg: number = 0,
    public nomStatus: string = '',
    public nomDescricao: string = '',
    public nomHoraInicio: string = '',
    public nomHoraFinal: string = '',
    public numMedida: number = 0,
    public numPassagens: number = 0,
    public numMotorista: number = 0
  ) {}
}
