import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticarService } from 'app/core/services/autenticar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrl: './redefinir-senha.component.scss'
})
export class RedefinirSenhaComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();
  form!: FormGroup;
  fb = inject(FormBuilder);
  autenticarService = inject(AutenticarService);
  router = inject(Router);

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  ngOnInit(): void {
    this._initEnviarEmailForm();
  }

  protected enviarEmail() {
    this.subscription$.add(
      this.autenticarService
        .enviarEmailRedefinicao(this.form.value.email as string)
        .subscribe({
          next: () => {
            this.router.navigate(['/login']);
          }
        })
    );
  }
  private _initEnviarEmailForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
