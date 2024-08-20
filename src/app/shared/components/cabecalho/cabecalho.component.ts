import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { TokenPayload } from '@core/models/services/autenticar/tokenPayload';
import { AutenticarService } from '@core/services/autenticar.service';
import { MenuLateralService } from '@core/services/menu-lateral.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent implements OnInit, AfterViewChecked, OnDestroy {
  private subscription$: Subscription = new Subscription();
  private inscrito: boolean = false;
  menuAberto: boolean = true;
  usuario?: TokenPayload;
  constructor(
    public menuLateralService: MenuLateralService,
    private authService: AutenticarService
  ) {}
  ngOnInit(): void {
    this.usuario = this.authService.tokenPayload();
  }
  ngAfterViewChecked(): void {
    if (this.menuLateralService.drawer && !this.inscrito) {
      this.inscrito = true;
      this.subscription$.add(
        this.menuLateralService.drawer.openedStart.subscribe(() => {
          this.menuAberto = true;
        })
      );
      this.subscription$.add(
        this.menuLateralService.drawer.closedStart.subscribe(() => {
          this.menuAberto = false;
        })
      );
    }
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  logout(): void {
    this.authService.sair();
  }
}
