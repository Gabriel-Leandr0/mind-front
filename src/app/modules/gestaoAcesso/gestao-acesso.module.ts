import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoAcessoRoutingModule } from './gestao-acesso-routing.module';
import { CriarUsuarioComponent } from './pages/criar-usuario/criar-usuario.component';
import { SelectProfileIdComponent } from './components/select-profileId/select-profileId.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { SharedModule } from '@shared/shared.module';
import { SelectAtivoComponent } from './components/select-ativo/select-ativo.component';

@NgModule({
  declarations: [
    CriarUsuarioComponent,
    UsuariosComponent,
    SelectProfileIdComponent,
    SelectAtivoComponent
  ],
  imports: [CommonModule, GestaoAcessoRoutingModule, SharedModule],
  exports: [
    CriarUsuarioComponent,
    UsuariosComponent,
    SelectProfileIdComponent,
    SelectAtivoComponent
  ]
})
export class GestaoAcessoModule {}
