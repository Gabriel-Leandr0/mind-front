import moment from 'moment';

export class SolicitarDossieRequestBody {
  constructor(
    public codUsuarioSolicitante: number = 0,
    public codUsuario: number = 0,
    public dtaInicial: string = moment().toJSON(),
    public dtaFinal: string = moment().toJSON()
  ) {}
}
