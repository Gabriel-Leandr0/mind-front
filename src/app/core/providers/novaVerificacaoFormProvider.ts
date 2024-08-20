import { FormGroup } from '@angular/forms';

export abstract class VerificacaoProcessoFormProvider {
  abstract get primeiroPasso(): FormGroup;
  abstract get segundoPasso(): FormGroup;
  abstract get terceiroPasso(): FormGroup;
}
