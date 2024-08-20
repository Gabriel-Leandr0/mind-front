import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { PaginacaoResponseData } from '@core/models/services/paginacaoResponseData';
import { ObterUsuarioResponseRegistro } from '@core/models/services/usuario/obterUsuarioResponseRegistro';

import { TituloPaginaService } from '@core/services/titulo-pagina.service';
import { UsuarioService } from '@core/services/usuario.service';
import { Subscription } from 'rxjs';
import { CriarUsuarioComponent } from '../criar-usuario/criar-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  private subscription$: Subscription = new Subscription();
  form!: FormGroup;
  pagUsuarios: PaginacaoResponseData<ObterUsuarioResponseRegistro> =
    new PaginacaoResponseData<ObterUsuarioResponseRegistro>();

  pesquisa: any;
  colunasVisiveis = ['acoes', 'Email', 'Perfil', 'Ativo'];
  mobile: boolean = false;

  constructor(
    private fb: FormBuilder,
    private tituloPagina: TituloPaginaService,
    private usuarioService: UsuarioService,

    private dialog: MatDialog
  ) {}

  obterUsuarios(page?: any, pesquisa?: string) {
    this.usuarioService.GetAllUsuarios(page || '', pesquisa || '', {
      onSuccess: (res: any) => {
        this.pagUsuarios.registros = res.Data.Result.ListaUsuarios;
        this.pagUsuarios.Total = res.Data.Result.Paginacao.Total;
        this.pagUsuarios.TamanhoPagina =
          res.Data.Result.Paginacao.TamanhoPagina;
      },
      onError: (error: any) => {}
    });
  }

  paginar(e?: PageEvent) {
    var pag = {
      Pagina: e?.pageIndex,
      TamanhoPagina: e?.pageSize
    };
    this.obterUsuarios(pag);
  }
  pesquisar() {
    this.obterUsuarios('', this.form.value);
  }

  criarUsuario() {
    const dialogRef = this.dialog.open(CriarUsuarioComponent, {
      width: '90%',
      height: '90%',
      data: 'criar'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.obterUsuarios();
      }
    });
  }
  editarUsuario(element: any) {
    const dialogRef = this.dialog.open(CriarUsuarioComponent, {
      width: '90%',
      height: '90%',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.obterUsuarios();
      }
    });
  }
  ngOnInit(): void {
    this.tituloPagina.defineTitulo('Listagem de usuários');
    this.form = this.fb.group({
      Email: [''],
      PerfilId: [''],
      Ativo: ['']
    });
    this.obterUsuarios();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
