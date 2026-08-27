import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { Usuario, UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class RelatorioService {
  constructor(
    private readonly emailService: EmailService,
    private readonly usuarioService: UsuarioService,
  ) {}
  public gerarRelatorioCreditos(
    id: number,
  ): RelatorioUsuariosCredito | { error: string } {
    const usuarios = this.usuarioService.getUsuarios();
    const usuario = this.usuarioService.getUsuario(id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    this.emailService.notificarPorEmailUsuario(
      usuario,
      'Relatório de créditos gerado',
    );
    return {
      totalUsuarios: usuarios ? usuarios.length : 0,
      totalCreditos: usuarios
        ? usuarios.reduce((sum, usuario) => sum + usuario.totalCreditos, 0)
        : 0,
    };
  }
  public gerarRelatorioUsuarios(id: number): Usuario[] | { error: string } {
    const usuarios = this.usuarioService.getUsuarios();
    const usuario = this.usuarioService.getUsuario(id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    this.emailService.notificarPorEmailUsuario(
      usuario,
      'Relatório de créditos solicitado',
    );
    const relatorioUsuarios = usuarios
      ? usuarios.map((usuario) => ({
          id: usuario.id,
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          email: usuario.email,
          telefone: usuario.telefone,
          totalCreditos: usuario.totalCreditos,
        }))
      : [];

    return relatorioUsuarios;
  }
}
export class RelatorioUsuariosCredito {
  totalUsuarios: number = 0;
  totalCreditos: number = 0;
}
