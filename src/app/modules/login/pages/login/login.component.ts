import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticarRequestBody } from 'app/core/models/services/autenticar/autenticarRequestBody';
import { AutenticarService } from 'app/core/services/autenticar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private autenticarService: AutenticarService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.subscription$.add(
      this.autenticarService
        .autenticar(this.form.value as AutenticarRequestBody)
        .subscribe({
          next: () => {
            this.router.navigate(['/']);
          }
        })
    );
  }
  private _initLoginForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', Validators.required]
    });
  }
  private _validacaoToken() {
    // if (this.autenticarService.isAuthenticatedAndTokenValid()) {
    //   this.router.navigate(['']);
    // }
  }
  ngOnInit(): void {
    this._initLoginForm();
    this._validacaoToken();
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  get fc() {
    return this.form.controls;
  }
}
