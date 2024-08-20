export class TokenPayload {
  constructor(
    public codUsuario: string,
    public nomNome: string,
    public codPerfil: string,
    public nomEmail: string,
    public codCargo: string,
    public codClientes: string[],
    public nbf: number,
    public exp: number,
    public iat: number
  ) {}
}
