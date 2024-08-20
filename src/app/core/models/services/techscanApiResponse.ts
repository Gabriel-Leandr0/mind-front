export class TechscanApiResponse<TData = unknown> {
  constructor(
    public data?: TData,
    public success: boolean = false,
    public messages: string[] = []
  ) {}
}
