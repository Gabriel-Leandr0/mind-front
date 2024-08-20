import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TituloPaginaService {
  titulo = signal('');

  defineTitulo(titulo: string): void {
    this.titulo.set(titulo);
  }
}
