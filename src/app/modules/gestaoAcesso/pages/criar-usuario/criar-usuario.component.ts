import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BREAKPOINTS } from '@core/constants/breakpoints';
import { PaginacaoResponseData } from '@core/models/services/paginacaoResponseData';
import { SolicitarDossieRequestBody } from '@core/models/services/turno/solicitarDossieRequestBody';
import { ObterUsuarioRequestBody } from '@core/models/services/usuario/obterUsuarioRequestBody';
import { ObterUsuarioResponseRegistro } from '@core/models/services/usuario/obterUsuarioResponseRegistro';
import { AutenticarService } from '@core/services/autenticar.service';
import { TituloPaginaService } from '@core/services/titulo-pagina.service';
import { UsuarioService } from '@core/services/usuario.service';
import { map, Subscription } from 'rxjs';
@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {
  title: string = 'Criar Usuário';
  private subscription$: Subscription = new Subscription();
  form!: FormGroup;
  mobile: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CriarUsuarioComponent>,
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  submit() {
    if (this.data != 'criar') {
      this.editarUsuario();
    } else {
      this.criarUsuario();
    }
  }
  criarUsuario() {
    // this.subscription$.add(
    //   this.turnoService
    //     .solicitarDossie(this.form.value as SolicitarDossieRequestBody)
    //     .subscribe()
    // );

    this.usuarioService.PostUsuario(this.form.value, {
      onSuccess: (res: any) => {
        console.log(res);
        this.dialogRef.close(this.form.value);
      },
      onError: (error: any) => {
        console.log(error);
      }
    });
  }

  editarUsuario() {
    this.usuarioService.PatchUsuario(this.data.Id, this.form.value, {
      onSuccess: (res: any) => {
        console.log(res);
        this.dialogRef.close(this.form.value);
      },
      onError: (error: any) => {
        console.log(error);
      }
    });
  }

  private _inicializarFormulario() {
    if (this.data != 'criar') {
      this.form = this.fb.group({
        Email: [this.data.Email, [Validators.required, Validators.email]],
        // Senha: [null, [Validators.required]],
        PerfilId: [this.data.Perfil.Id, [Validators.required]]
      });
      console.log(this.data);
    } else {
      this.form = this.fb.group({
        Email: [null, [Validators.required, Validators.email]],
        Senha: [null, [Validators.required]],
        PerfilId: [null, [Validators.required]]
      });
    }
  }

  ErroEmail() {
    const emailControl = this.form.get('Email');

    if (emailControl?.errors) {
      if (emailControl.errors?.['required']) {
        return 'Obrigatório';
      }
      if (emailControl.errors?.['email']) {
        return 'O email não está em um formato válido';
      }
    }

    if (emailControl?.value?.trim() === '') {
      return 'O email é obrigatório';
    }

    return null; // Retorna null se não houver erros no controle de email
  }

  close() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    if (this.data != 'criar') {
      this.title = 'Editar Usuário';
    }
    this._inicializarFormulario();
    this.subscription$.add(
      this.breakpointObserver
        .observe([BREAKPOINTS.lg])
        .subscribe(({ matches }) => {
          this.mobile = matches;
        })
    );
  }
}
