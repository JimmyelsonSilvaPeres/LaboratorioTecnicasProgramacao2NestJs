import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { Notificacao } from 'src/interfaces/notificacao';
import { TelegramService } from 'src/telegram/telegram.service';
import { WhatsappService } from 'src/whatsapp/whatsapp.service';

@Injectable()
export class NotificacaoFactoryService {
  constructor(
    private readonly emailService: EmailService,
    private readonly whatsappService: WhatsappService,
    private readonly telegramService: TelegramService,
  ) {}
  public getNotificador(tipo: string): Notificacao {
    switch (tipo) {
      case 'email':
        return this.emailService;
      case 'whatsapp':
        return this.whatsappService;
      case 'telegram':
        return this.telegramService;
      default:
        throw new Error(`Tipo de notificação inválido: ${tipo}`);
    }
  }
}
