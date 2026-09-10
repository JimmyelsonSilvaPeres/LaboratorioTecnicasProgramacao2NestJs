import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { RelatorioController } from './relatorio/relatorio.controller';
import { EmailService } from './email/email.service';
import { UsuarioService } from './usuario/usuario.service';
import { RelatorioService } from './relatorio/relatorio.service';
import { WhatsappService } from './whatsapp/whatsapp.service';
import { NotificacaoService } from './notificacao/notificacao.service';
import { NotificacaoFactoryService } from './notificacao-factory/notificacao-factory.service';
import { TelegramService } from './telegram/telegram.service';

@Module({
  imports: [],
  controllers: [UsuarioController, RelatorioController],
  providers: [EmailService, UsuarioService, RelatorioService, WhatsappService, NotificacaoService, NotificacaoFactoryService, TelegramService],
})
export class AppModule {}
