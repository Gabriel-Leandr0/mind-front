import { PaginacaoResponseData } from '../paginacaoResponseData';

export class ObterListaMestraResponseData {
  constructor(
    public nomGed?: string,
    public nomVersao?: number,
    public nomCodigo?: string,
    public nomArmazenamento?: string,
    public nomIndexacao?: string,
    public nomRetencao?: string,
    public nomDescarte?: string,
    public data?: PaginacaoResponseData<ObterListaMestraResponseData>
  ) {}
}
