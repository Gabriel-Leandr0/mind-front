export class ObterProcedimentoResponseRegistro {
  constructor(
    public codRpArea?: number,
    public codUsuario?: number,
    public nomUsuario?: string,
    public nomCliente?: string,
    public dtaInicio?: string,
    public nomStatus?: string,
    public nomDescricao?: string,
    public nomSign?: string
  ) {}
}
