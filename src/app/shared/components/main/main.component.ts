import { Component } from '@angular/core';
import { TituloPaginaService } from '@core/services/titulo-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(
    public tituloPagina: TituloPaginaService,
    private router: Router
  ) {}

  isHomeRoute: boolean = false;

  ngOnInit() {
    this.router.events.subscribe(val => {
      // Verifica se a rota atual é a rota inicial "/"
      this.isHomeRoute = this.router.url === '/';
    });
  }
}
