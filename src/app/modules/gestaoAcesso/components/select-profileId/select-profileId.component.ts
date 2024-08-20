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
import { ProfileService } from '@core/services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-profileId',
  templateUrl: './select-profileId.component.html',
  styleUrl: './select-profileId.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectProfileIdComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: SelectProfileIdComponent
    }
  ]
})
export class SelectProfileIdComponent
  implements ControlValueAccessor, Validator, OnInit, AfterViewInit, OnDestroy
{
  @ContentChildren(MatError) errors!: QueryList<MatError>;
  @ViewChild(MatFormField) formField!: MatFormField;
  private _subscription$: Subscription = new Subscription();
  control!: FormControl<number | null>;
  @Input() invalido: boolean = false;
  profiles!: any[];
  profilesFiltrados: any[] = [];
  perfilSelecionado: any;
  onTouched!: () => void;
  touched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {}

  exibirDadosProfile(): (value: any) => string {
    return (value: any) => {
      if (this.profiles) {
        const profile = this.profiles.find(v => v?.Id === value);
        if (profile) {
          return profile.Nome;
        }
      }
      return '';
    };
  }

  filtrarProfile(event?: Event) {
    if (!event) {
      this.profilesFiltrados = this.profiles;
      return;
    }

    const nome = (event.target as HTMLInputElement)?.value.toLowerCase();
    this.profilesFiltrados = this.profiles.filter(profile => {
      return profile.Nome.toLowerCase().includes(nome);
    });
  }

  selecionarPerfil(event: any) {
    const selectedProfileId = event.option.value;
    this.perfilSelecionado = this.profiles.find(
      profile => profile.Id === selectedProfileId
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
    setTimeout(() => {
      this.control.setValue(valor, { emitEvent: false });
    }, 500);
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
    this.profilesFiltrados = this.profiles;
    this._inicializarFormulario();
    this.getProfiles();
  }

  getProfiles() {
    this.profileService.getAllProfile({
      onSuccess: (res: any) => {
        this.profiles = res.Data.Result.listaPerfis;
      },
      onError: (error: any) => {}
    });
  }

  ngAfterViewInit(): void {
    this.formField._errorChildren = this.errors;
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }
}
