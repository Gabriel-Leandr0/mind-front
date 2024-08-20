export class ObterAssinaturaResponseRegistro {
  constructor(
    public codAssinatura?: number,
    public nomCliente?: string,
    public nomCodigo?: string,
    public nomOriginal?: string,
    public nomUsuario?: string,
    public dtaCriado?: string,
    public dtaFinalizado?: string,
    public nomAssinado?: string,
    public ebcoSha256Original?: string,
    public codUsuario?: number,
    public codCliente?: number,
    public nomCodigoInterno?: string,
    public nomObs?: string,
    public nomStatus?: string
  ) {}
}
