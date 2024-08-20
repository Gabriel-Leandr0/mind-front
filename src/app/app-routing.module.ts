import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loginGuard } from './core/guards/login/login.guard';
import { MainComponent } from './shared/components/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: MainComponent,
    canActivateChild: [loginGuard],
    canActivate: [loginGuard],
    children: [
      {
        path: 'gestaoAcesso',
        loadChildren: () =>
          import('./modules/gestaoAcesso/gestao-acesso.module').then(
            m => m.GestaoAcessoModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
