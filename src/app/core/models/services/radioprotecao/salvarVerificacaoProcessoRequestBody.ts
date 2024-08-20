import moment from 'moment';

import { Medidor } from './medidor';
import { UsuarioCursoReciclagem } from './usuarioCursoReciclagem';
import { Verificacao } from './verificacao';

export class SalvarVerificacaoProcessoRequestBody {
  constructor(
    public codCliente: number = 0,
    public codOperador: number = 0,
    public dtaInicio: string = moment().toJSON(),
    public nomObs: string = '',
    public verificacoes: Verificacao[] = [],
    public medidores: Medidor[] = [],
    public usuariosCursoReciclagem: UsuarioCursoReciclagem[] = []
  ) {}
}
