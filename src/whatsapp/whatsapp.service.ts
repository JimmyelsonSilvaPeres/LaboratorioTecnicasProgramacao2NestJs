import { Injectable } from '@nestjs/common';
import { Notificacao } from 'src/interfaces/notificacao';
import { Usuario } from 'src/usuario/usuario.service';

@Injectable()
export class WhatsappService implements Notificacao {
  public notificar(usuario: Usuario, msg: string) {
    console.log(
      `Notificar por whatsapp: ${usuario.nombre} ${usuario.apellido} - ${msg}`,
    );
  }
}
