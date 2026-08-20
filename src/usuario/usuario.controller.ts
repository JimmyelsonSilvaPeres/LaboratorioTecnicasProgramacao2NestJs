import { Body, Controller, Get, Post } from '@nestjs/common';

const usuarios = ['Rodrigo', 'João', 'Maria'];

@Controller('usuario')
export class UsuarioController {
  @Get()
  encontrarUsuarios() {
    return { usuarios: usuarios };
  }
  @Post()
  criarUsuario(@Body() usuario: { nome: string; email: string }) {
    usuarios.push(usuario.nome);
    this.notificarUsuario(usuario.email);
    return { message: 'Usuário criado com sucesso!' };
  }
  private notificarUsuario(email: string) {
    console.log(
      'Cadastro realizado com sucesso! Enviando e-mail para: ' + email,
    );
  }
}
