export class PaginacaoRequest {
  constructor(
    public Pagina: number = 1,
    public TamanhoPagina: number = 20,
    public paginar: boolean = true
  ) {}
}
