export class PaginacaoResponseData<TRegistros> {
  constructor(
    public Total: number = 0,
    public TamanhoPagina: number = 10,
    public Pagina: number = 0,
    public totalDePaginas: number = 0,
    public temPaginaAnterior: boolean = false,
    public temPaginaSeguinte: boolean = false,
    public registros: TRegistros[] = []
  ) {}
}
