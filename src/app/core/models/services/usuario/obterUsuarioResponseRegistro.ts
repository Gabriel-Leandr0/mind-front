export class ObterUsuarioResponseRegistro {
  constructor(
    public codUsuario?: number,
    public nomUsuario?: string,
    public codCliente?: number,
    public codPerfil?: number,
    public nomEmail?: string,
    public nomCelular?: string,
    public nomObs?: string,
    public dtaData?: string,
    public numGmt?: number,
    public staVerao?: string,
    public codArea?: number,
    public codCargo?: string,
    public codFilial?: number,
    public nomCulture?: string,
    public nomMatricula?: string,
    public nomCpf?: string,
    public nomNome?: string,
    public nomStatus?: string
  ) {}
}
