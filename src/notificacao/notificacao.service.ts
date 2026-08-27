import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { Notificacao } from 'src/interfaces/notificacao';
import { Usuario } from 'src/usuario/usuario.service';
import { WhatsappService } from 'src/whatsapp/whatsapp.service';

@Injectable()
export class NotificacaoService {
  private readonly tiposNotificacao: TipoNotificacao[] = [];
  constructor(
    private readonly emailService: EmailService,
    private readonly whatsappService: WhatsappService,
  ) {
    this.tiposNotificacao = [
      { tipo: 'email', servico: this.emailService },
      { tipo: 'whatsapp', servico: this.whatsappService },
    ];
  }
  public notificar(usuario: Usuario, msg: string): void {
    usuario.tiposNotificacao.forEach((tipo) => {
      const notificacao = this.tiposNotificacao.find((x) => x.tipo === tipo);

      if (notificacao) {
        notificacao.servico.notificar(usuario, msg);
      }
    });
  }
}
export interface TipoNotificacao {
  tipo: string;
  servico: Notificacao;
}
