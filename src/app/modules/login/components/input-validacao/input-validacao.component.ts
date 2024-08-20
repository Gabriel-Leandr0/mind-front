import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MensagensValidação } from 'app/core/models/mensagensValidacao';

const VALIDATORS_MESSAGES: MensagensValidação = {
  required: 'Obrigatório',
  email: 'E-mail inválido',
  password: 'E-mail ou senha incorretos',
  notMatch: 'As senhas não são iguais'
};

@Component({
  selector: 'app-input-validacao',
  templateUrl: './input-validacao.component.html',
  styleUrl: './input-validacao.component.scss'
})
export class InputValidacaoComponent {
  @Input() control!: AbstractControl;

  getErrorMessage(errorKey: string): string {
    return VALIDATORS_MESSAGES[errorKey] || '';
  }
}
