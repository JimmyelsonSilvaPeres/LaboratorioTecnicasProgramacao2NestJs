import { Body, Controller, Get, Param, Post } from '@nestjs/common';

const usuarios = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan.perez@example.com',
    telefone: '123456789',
    totalCreditos: 1000.0,
  },
];

@Controller('sistema')
export class SistemaController {
  @Get('usuarios')
  getUsuarios() {
    return usuarios;
  }
  @Post('usuarios')
  createUsuario(@Body() usuario: Usuario) {
    usuario.id = this.generateId();
    usuarios.push(usuario);
    this.notificarPorEmailUsuario(usuario, 'Usuario cadastrado com sucesso');
    return usuario;
  }
  @Post('usuarios-add-credito/:id')
  addCredito(
    @Param('id') id: number,
    @Body() { creditos }: { creditos: number },
  ) {
    const usuario = usuarios.find((u) => u.id == id);
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
    const usuario = usuarios.find((u) => u.id == id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    usuario.totalCreditos -= creditos;
    this.notificarPorEmailUsuario(usuario, `Créditos removidos: ${creditos}`);
    return usuario;
  }
  @Get('relatorio-creditos/:id')
  getRelatorio(@Param('id') id: number) {
    const usuario = usuarios.find((u) => u.id == id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    this.notificarPorEmailUsuario(usuario, 'Relatório de créditos gerado');
    return {
      totalUsuarios: usuarios.length,
      totalCreditos: usuarios.reduce(
        (sum, usuario) => sum + usuario.totalCreditos,
        0,
      ),
    };
  }
  @Get('relatorio-usuarios/:id')
  getRelatorioUsuarios(@Param('id') id: number) {
    const usuario = usuarios.find((u) => u.id == id);
    if (!usuario) {
      return { error: 'Usuario no encontrado' };
    }
    this.notificarPorEmailUsuario(usuario, 'Relatório de créditos solicitado');
    const relatorioUsuarios = usuarios.map((usuario) => ({
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      telefone: usuario.telefone,
      totalCreditos: usuario.totalCreditos,
    }));

    return relatorioUsuarios;
  }
  private generateId(): number {
    return usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;
  }
  private notificarPorEmailUsuario(usuario: Usuario, msg: string) {
    console.log(
      `Notificar por email: ${usuario.nombre} ${usuario.apellido} - ${msg}`,
    );
  }
}
export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefone: string;
  totalCreditos: number;
}
