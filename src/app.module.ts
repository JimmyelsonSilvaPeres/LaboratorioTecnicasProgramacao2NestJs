import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { RelatorioController } from './relatorio/relatorio.controller';
import { EmailService } from './email/email.service';
import { UsuarioService } from './usuario/usuario.service';
import { RelatorioService } from './relatorio/relatorio.service';

@Module({
  imports: [],
  controllers: [UsuarioController, RelatorioController],
  providers: [EmailService, UsuarioService, RelatorioService],
})
export class AppModule {}
