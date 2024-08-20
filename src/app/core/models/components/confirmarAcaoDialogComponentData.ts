export class ConfirmarAcaoDialogComponentData {
  constructor(
    public titulo: string = 'Confirmação',
    public conteudo: string = 'Deseja realmente executar a ação?',
    public textoCancelar: string = 'Cancelar',
    public textoConfirmar: string = 'Confirmar',
    public confirmar: (...args: Array<unknown>) => unknown = () => null
  ) {}
}
