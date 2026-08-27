import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/usuario/usuario.service';

@Injectable()
export class EmailService {
  public notificarPorEmailUsuario(usuario: Usuario, msg: string) {
    console.log(
      `Notificar por email: ${usuario.nombre} ${usuario.apellido} - ${msg}`,
    );
  }
}
