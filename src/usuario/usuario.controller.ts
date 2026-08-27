import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario, UsuarioService } from './usuario.service';

@Controller()
export class UsuarioController {
  constructor() {}

  @Get('usuarios')
  getUsuarios() {
    const usuarioService = new UsuarioService();
    return usuarioService.getUsuarios();
  }
  @Post('usuarios')
  createUsuario(@Body() usuario: Usuario) {
    const usuarioService = new UsuarioService();
    return usuarioService.addUsuario(usuario);
  }
  @Post('usuarios-add-credito/:id')
  addCredito(
    @Param('id') id: number,
    @Body() { creditos }: { creditos: number },
  ) {
    const usuarioService = new UsuarioService();
    const usuario = usuarioService.getUsuario(id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    usuario.totalCreditos += creditos;
    this.notificarPorEmailUsuario(usuario, `Créditos adicionados: ${creditos}`);
    return usuario;
  }
  @Post('usuarios-remove-credito/:id')
  removeCredito(
    @Param('id') id: number,
    @Body() { creditos }: { creditos: number },
  ) {
    const usuarioService = new UsuarioService();
    const usuario = usuarioService.getUsuario(id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    usuario.totalCreditos -= creditos;
    this.notificarPorEmailUsuario(usuario, `Créditos removidos: ${creditos}`);
    return usuario;
  }
  private notificarPorEmailUsuario(usuario: Usuario, msg: string) {
    console.log(
      `Notificar por email: ${usuario.nombre} ${usuario.apellido} - ${msg}`,
    );
  }
}
