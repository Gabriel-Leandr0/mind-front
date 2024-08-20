export class ObterClienteResponseRegistro {
  constructor(
    public codCliente?: number,
    public nomCliente?: string,
    public nomDiamanutencao?: string,
    public dtaData?: string,
    public nomObs?: string,
    public nomEmail?: string,
    public chkChamado?: number,
    public chkManutencao?: number,
    public chkStatus?: number,
    public chkAtendimento?: number,
    public nomSite?: string,
    public nomPais?: string,
    public nomEquipamento?: string,
    public nomAlertaHora?: string,
    public nomSerie?: string,
    public nomAlertaEmail?: string,
    public nomCroqui?: string,
    public numPonto?: number,
    public nomObsRp?: string,
    public nomLocal?: string,
    public nomFabricante?: string,
    public nomTensao?: string,
    public nomCorrente?: string,
    public nomBot?: string,
    public nomOrganograma?: string
  ) {}
}
