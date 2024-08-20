export class RedefinirRequestBody {
  constructor(
    public codUsuario: number,
    public senha: string,
    public token: string
  ) {}
}
