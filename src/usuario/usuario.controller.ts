import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario, UsuarioService } from './usuario.service';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('usuarios')
  getUsuarios() {
    return this.usuarioService.getUsuarios();
  }
  @Post('usuarios')
  createUsuario(@Body() usuario: Usuario) {
    return this.usuarioService.addUsuario(usuario);
  }
  @Post('usuarios-add-credito/:id')
  addCredito(
    @Param('id') id: number,
    @Body() { creditos }: { creditos: number },
  ) {
    return this.usuarioService.addCredito(id, creditos);
  }
  @Post('usuarios-remove-credito/:id')
  removeCredito(
    @Param('id') id: number,
    @Body() { creditos }: { creditos: number },
  ) {
    return this.usuarioService.RemoveCredito(id, creditos);
  }
}
