import { Injectable } from '@angular/core';
import { EStorageKey } from '@core/enums/EStorageKey';
import { TipoStorage } from '@core/models/services/storage/tipoStorage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private armazenar(
    tipoStorage: TipoStorage,
    key: EStorageKey,
    data: unknown
  ): void {
    window[tipoStorage].setItem(key, JSON.stringify(data));
  }
  armazenarSessao(key: EStorageKey, data: unknown): void {
    this.armazenar('sessionStorage', key, data);
  }
  armazenarLocal(key: EStorageKey, data: unknown): void {
    this.armazenar('localStorage', key, data);
  }
  private retornar<TResultado = unknown>(
    tipoStorage: TipoStorage,
    key: EStorageKey
  ): TResultado | undefined {
    const resultado = window[tipoStorage].getItem(key);
    if (!resultado) {
      return undefined;
    }

    return JSON.parse(resultado) as TResultado;
  }
  retornarSessao<TResultado = unknown>(
    key: EStorageKey
  ): TResultado | undefined {
    return this.retornar<TResultado>('sessionStorage', key);
  }
  retornarLocal<TResultado = unknown>(
    key: EStorageKey
  ): TResultado | undefined {
    return this.retornar<TResultado>('localStorage', key);
  }
  private remover(tipoStorage: TipoStorage, key: EStorageKey): void {
    window[tipoStorage].removeItem(key);
  }
  removerSessao(key: EStorageKey): void {
    this.remover('sessionStorage', key);
  }
  removerLocal(key: EStorageKey): void {
    this.remover('localStorage', key);
  }
  private limpar(tipoStorage: TipoStorage): void {
    window[tipoStorage].clear();
  }
  limparSessao(): void {
    this.limpar('sessionStorage');
  }
  limparLocal(): void {
    this.limpar('localStorage');
  }
}
