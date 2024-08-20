export class ExcluirLevantamentoRequestBody {
  constructor(
    public codUsuario: string | undefined,
    public codRpArea: number
  ) {}
}
