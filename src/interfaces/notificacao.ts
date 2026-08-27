import { Usuario } from 'src/usuario/usuario.service';

export interface Notificacao {
  notificar(usuario: Usuario, msg: string): void;
}
