import { Controller, Get, Param } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { UsuarioService } from 'src/usuario/usuario.service';

@Controller()
export class RelatorioController {
  constructor() {}
  @Get('relatorio-creditos/:id')
  getRelatorio(@Param('id') id: number) {
    const usuarioService = new UsuarioService();
    const usuarios = usuarioService.getUsuarios();
    const usuario = usuarioService.getUsuario(id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    const emailService = new EmailService();
    emailService.notificarPorEmailUsuario(
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
  @Get('relatorio-usuarios/:id')
  getRelatorioUsuarios(@Param('id') id: number) {
    const usuarioService = new UsuarioService();
    const usuarios = usuarioService.getUsuarios();
    const usuario = usuarioService.getUsuario(id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    const emailService = new EmailService();
    emailService.notificarPorEmailUsuario(
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
