export class ObterMedidorResponseRegistro {
  constructor(
    public codRpMedidor?: number,
    public nomMedidor?: string,
    public nomFabricante?: string,
    public nomTipo?: string,
    public nomSerie?: string,
    public nomCertificado?: string,
    public nomLaboratorio?: string,
    public dtaCalibracao?: string,
    public dtaVencimento?: string,
    public nomRegiao?: string,
    public codCliente?: number,
    public nomModelo?: string,
    public nomPatrimonio?: string,
    public nomSituacao?: string,
    public dtaCadastro?: string,
    public dtaUpdate?: string,
    public codUsuario?: number,
    public nomObs?: string,
    public nomEstado?: string
  ) {}
}
