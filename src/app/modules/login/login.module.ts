import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { RedefinirSenhaComponent } from './pages/redefinir-senha/redefinir-senha.component';

@NgModule({
  declarations: [
    LoginComponent,
    RedefinirSenhaComponent,
    EsqueceuSenhaComponent
  ],
  imports: [CommonModule, LoginRoutingModule, SharedModule]
})
export class LoginModule {}
