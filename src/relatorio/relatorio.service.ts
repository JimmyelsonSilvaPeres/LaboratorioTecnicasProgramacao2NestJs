import { Injectable } from '@nestjs/common';
import { NotificacaoService } from 'src/notificacao/notificacao.service';
import { Usuario, UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class RelatorioService {
  constructor(
    private readonly notificacaoService: NotificacaoService,
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
    this.notificacaoService.notificar(usuario, 'Relatório de créditos gerado');
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
    this.notificacaoService.notificar(
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
          tiposNotificacao: usuario.tiposNotificacao,
        }))
      : [];

    return relatorioUsuarios;
  }
}
export class RelatorioUsuariosCredito {
  totalUsuarios: number = 0;
  totalCreditos: number = 0;
}
