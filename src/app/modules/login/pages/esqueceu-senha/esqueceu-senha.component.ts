import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RedefinirRequestBody } from 'app/core/models/services/autenticar/redefinirRequestBody';
import { AutenticarService } from 'app/core/services/autenticar.service';
import { confirmarSenhaValidator } from 'app/core/validators/confirmarSenhaValidator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrl: './esqueceu-senha.component.scss'
})
export class EsqueceuSenhaComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();
  form!: FormGroup;
  fb = inject(FormBuilder);
  activatedRoute = inject(ActivatedRoute);
  autenticarService = inject(AutenticarService);
  router = inject(Router);

  constructor() {}
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  ngOnInit(): void {
    this._initForm();
  }
  private _initForm() {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    if (!queryParams['token']) {
      this.router.navigate(['/login']);
    }
    this.form = this.fb.group(
      {
        codUsuario: [queryParams['codUsuario']],
        token: [queryParams['token']],
        senha: ['', Validators.required],
        confirmarSenha: ['', Validators.required]
      },
      {
        validators: confirmarSenhaValidator('senha', 'confirmarSenha')
      }
    );
  }

  protected mudarSenha(): void {
    var redefinir = {
      guidResetSenha: this.form.value.token,
      novaSenha: this.form.value.senha
    };
    this.subscription$.add(
      this.autenticarService.redefinirSenha(redefinir).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
