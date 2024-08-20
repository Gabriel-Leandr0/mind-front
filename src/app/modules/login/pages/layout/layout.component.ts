import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  tituloInformativo: string =
    'Este portal permite o acesso ao Sistema de Gerenciamento dos Processos de Inspeção pelos clientes e pelos órgãos reguladores do comércio internacional. As informações disponibilizadas pelo referido sistema são coletadas em tempo real diretamente dos equipamentos de inspeção e armazenadas em ambiente externo as áreas operacionais (“nuvem”). Este sistema de gerenciamento disponibiliza aos seus usuários as imagens radioscópicas geradas no processo de inspeção e os relatórios de manutenção preventiva e corretiva de cada equipamento. Todo o histórico de cada equipamento, incluindo a informação de substituição de peças, é disponibilizado em tempo real. Havendo alteração na situação operacional dos sistemas de inspeção, um alerta é enviado aos profissionais cadastrados.';
}
