import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { MatError, MatFormField } from '@angular/material/form-field';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-ativo',
  templateUrl: './select-ativo.component.html',
  styleUrl: './select-ativo.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectAtivoComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: SelectAtivoComponent
    }
  ]
})
export class SelectAtivoComponent
  implements ControlValueAccessor, Validator, OnInit, AfterViewInit, OnDestroy
{
  @ContentChildren(MatError) errors!: QueryList<MatError>;
  @ViewChild(MatFormField) formField!: MatFormField;
  private _subscription$: Subscription = new Subscription();
  control!: FormControl<number | null>;
  @Input() invalido: boolean = false;
  ativos: any[] = [
    {
      Id: true,
      Nome: 'Ativo'
    },
    {
      Id: false,
      Nome: 'Inativo'
    }
  ];
  ativosFiltrados: any[] = [];
  perfilSelecionado: any;
  onTouched!: () => void;
  touched: boolean = false;

  constructor(private fb: FormBuilder) {}

  exibirDadosAtivo(): (value: any) => string {
    return (value: any) => {
      if (this.ativos) {
        const ativo = this.ativos.find(v => v?.Id === value);
        if (ativo) {
          return ativo.Nome;
        }
      }
      return '';
    };
  }

  filtrarAtivo(event?: Event) {
    if (!event) {
      this.ativosFiltrados = this.ativos;
      return;
    }

    const nome = (event.target as HTMLInputElement)?.value.toLowerCase();
    this.ativosFiltrados = this.ativos.filter(ativo => {
      return ativo.Nome.toLowerCase().includes(nome);
    });
  }

  selecionarPerfil(event: any) {
    const selectedAtivo = event.option.value;
    this.perfilSelecionado = this.ativos.find(
      ativo => ativo.Id === selectedAtivo
    );
    this.control.setValue(this.perfilSelecionado);
  }

  tocar() {
    if (!this.touched && this.onTouched) {
      this.onTouched();
      this.touched = true;
    }
  }

  private _inicializarFormulario() {
    this.control = this.fb.control(0);
  }

  limpar() {
    this.tocar();
    this.control.reset();
  }

  writeValue(valor: number | null): void {
    this.control.setValue(valor, { emitEvent: false });
  }

  registerOnChange(fn: () => void): void {
    this._subscription$.add(this.control.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.control.setErrors(control.errors);
    this.control.updateValueAndValidity({ emitEvent: false });
    return null;
  }

  ngOnInit(): void {
    this.ativosFiltrados = this.ativos;
    this._inicializarFormulario();
  }

  ngAfterViewInit(): void {
    this.formField._errorChildren = this.errors;
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }
}
