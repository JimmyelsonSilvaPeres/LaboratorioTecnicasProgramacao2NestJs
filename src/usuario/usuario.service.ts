import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
const usuarios: Usuario[] = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan.perez@example.com',
    telefone: '123456789',
    totalCreditos: 1000.0,
  },
];

@Injectable()
export class UsuarioService {
  RemoveCredito(id: number, creditos: number) {
    const usuario = this.getUsuario(id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    usuario.totalCreditos -= creditos;
    this.emailService.notificarPorEmailUsuario(
      usuario,
      `Créditos adicionados: ${creditos}`,
    );
    return usuario;
  }
  constructor(private readonly emailService: EmailService) {}
  addCredito(id: number, creditos: number) {
    const usuario = this.getUsuario(id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    usuario.totalCreditos += creditos;
    this.emailService.notificarPorEmailUsuario(
      usuario,
      `Créditos adicionados: ${creditos}`,
    );
    return usuario;
  }
  getUsuario(id: number): Usuario | undefined {
    return usuarios.find((u) => u.id == id);
  }
  getUsuarios(): Usuario[] {
    return usuarios;
  }
  addUsuario(usuario: Usuario): Usuario {
    usuario.id = this.generateId();
    usuarios.push(usuario);
    return usuario;
  }
  private generateId(): number {
    return usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;
  }
}
export class Usuario {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefone: string = '';
  totalCreditos: number = 0;
}
