import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acesso-expansion',
  templateUrl: './acesso-expansion.component.html',
  styleUrl: './acesso-expansion.component.scss'
})
export class AcessoExpansionComponent implements AfterViewInit {
  @ViewChild('acessoExpansionPanel') expansionPanel?: MatExpansionPanel;

  constructor(private router: Router) {}

  rolarParaInicio() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  abrir() {
    const ativo = this.router.isActive('/gestaoAcesso', {
      fragment: 'ignored',
      matrixParams: 'ignored',
      paths: 'subset',
      queryParams: 'ignored'
    });
    if (ativo) {
      this.expansionPanel?.open();
    }
  }

  ngAfterViewInit(): void {
    this.abrir();
  }
}
