export class ObterRelatorioFechamentoTurnoResponseRegistro {
  constructor(
    public codTurno: number,
    public dtaData?: string,
    public codUsuario?: number,
    public codCliente?: number,
    public nomCliente?: string,
    public numInspecionado?: number,
    public numSuspeito?: number,
    public numIsotanksInfla?: number,
    public numTempo?: string,
    public nomObs?: string,
    public nomGasAcc?: string,
    public nomKu35?: string,
    public nomKu35Rh1?: string,
    public nomArCc?: string,
    public nomCabine?: string,
    public nomAvarias?: string,
    public nomAvariasObs?: string,
    public nomDosimetro?: string,
    public nomPlacas?: string,
    public nomAfericao?: string,
    public nomVisitas?: string,
    public nomLimpeza?: string,
    public codUsuarioTurnoDetalhe?: number,
    public nomUsuarioTurnoDetalhe?: string,
    public nomEmailTurnoDetalhe?: string,
    public nomCpfTurnoDetalhe?: string,
    public nomCargoTurnoDetalhe?: string,
    public nomCelularTurnoDetalhe?: string,
    public codTurnoDetalhes?: number,
    public nomTurnoDetalhe?: string
  ) {}
}
