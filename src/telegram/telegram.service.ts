import { Injectable } from '@nestjs/common';
import { Notificacao } from 'src/interfaces/notificacao';
import { Usuario } from 'src/usuario/usuario.service';

@Injectable()
export class TelegramService implements Notificacao {
  notificar(usuario: Usuario, msg: string): void {
    console.log(
      `Notificar por Telegram: ${usuario.nombre} ${usuario.apellido} - ${msg}`,
    );
  }
}
