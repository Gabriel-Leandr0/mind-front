// import { LayoutModule } from '@angular/cdk/layout';
// import { OverlayModule } from '@angular/cdk/overlay';
// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatButtonModule } from '@angular/material/button';
// import { MAT_DATE_FORMATS, MatRippleModule } from '@angular/material/core';
// import { MAT_DATE_LOCALE } from '@angular/material/core';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatMenuModule } from '@angular/material/menu';
// import {
//   MatPaginatorIntl,
//   MatPaginatorModule
// } from '@angular/material/paginator';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatTableModule } from '@angular/material/table';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import { RouterModule } from '@angular/router';
// import { APP_DATE_FORMATS } from '@core/constants/appDateFormats';
// import { AppPaginatorIntl } from '@core/utils/appPaginatorIntl';
// import { lottiePlayerFactory } from '@core/utils/lottiePlayerFactory';
// import { InputContainerComponent } from 'app/modules/login/components/input-container/input-container.component';
// import { InputValidacaoComponent } from 'app/modules/login/components/input-validacao/input-validacao.component';
// import { TituloComponent } from 'app/modules/login/components/titulo/titulo.component';
// import { LayoutComponent } from 'app/modules/login/pages/layout/layout.component';
// import { LottieModule } from 'ngx-lottie';
// import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
// import { ToastrModule } from 'ngx-toastr';

// import { ButtonComponent } from './components/button/button.component';
// import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
// import {  } from './components/collapse-menu-lateral/collapse-menu-lateral.component';
// import { LoaderComponent } from './components/loader/loader.component';
// import { MainComponent } from './components/main/main.component';
// import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
// import { AcessoExpansionComponent } from './components/gestaoAcesso-expansion/acesso-expansion.component';

import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_FORMATS, MatRippleModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatPaginatorIntl,
  MatPaginatorModule
} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { RouterModule } from '@angular/router';
import { APP_DATE_FORMATS } from '@core/constants/appDateFormats';
import { AppPaginatorIntl } from '@core/utils/appPaginatorIntl';
import { lottiePlayerFactory } from '@core/utils/lottiePlayerFactory';
import { InputContainerComponent } from 'app/modules/login/components/input-container/input-container.component';
import { InputValidacaoComponent } from 'app/modules/login/components/input-validacao/input-validacao.component';
import { TituloComponent } from 'app/modules/login/components/titulo/titulo.component';
import { LayoutComponent } from 'app/modules/login/pages/layout/layout.component';
import { LottieModule } from 'ngx-lottie';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';

import { ButtonComponent } from './components/button/button.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MainComponent } from './components/main/main.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { AcessoExpansionComponent } from './components/gestaoAcesso-expansion/acesso-expansion.component';
import { CollapseMenuLateralComponent } from './components/collapse-menu-lateral/collapse-menu-lateral.component';

@NgModule({
  declarations: [
    ButtonComponent,
    MenuLateralComponent,
    CabecalhoComponent,
    CollapseMenuLateralComponent,
    LoaderComponent,
    MainComponent,
    LayoutComponent,
    TituloComponent,
    InputValidacaoComponent,
    InputContainerComponent,
    AcessoExpansionComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterModule,
    MatMenuModule,
    LottieModule.forRoot({ player: lottiePlayerFactory }),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatSelectModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatAutocompleteModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    OverlayModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      extendedTimeOut: 5000,
      progressBar: true,
      closeButton: true,
      tapToDismiss: false
    })
  ],
  exports: [
    ButtonComponent,
    MenuLateralComponent,
    CabecalhoComponent,
    CollapseMenuLateralComponent,
    MainComponent,
    LoaderComponent,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterModule,
    MatMenuModule,
    LottieModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatSelectModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatAutocompleteModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    OverlayModule,
    ToastrModule,
    LayoutComponent,
    TituloComponent,
    InputValidacaoComponent,
    InputContainerComponent
  ],
  providers: [
    provideNgxMask(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    {
      provide: MAT_DATE_FORMATS,
      useValue: APP_DATE_FORMATS
    },
    { provide: MatPaginatorIntl, useClass: AppPaginatorIntl }
  ]
})
export class SharedModule {}
