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
import { CalculadoraService } from './calculadora/calculadora.service';
import { CalculadoraAdministradorService } from './calculadora-administrador/calculadora-administrador.service';
import { CalculadoraVendedorService } from './calculadora-vendedor/calculadora-vendedor.service';
import { CalculadoraPagamentoController } from './calculadora-pagamento/calculadora-pagamento.controller';

@Module({
  imports: [],
  controllers: [UsuarioController, RelatorioController, CalculadoraPagamentoController],
  providers: [EmailService, UsuarioService, RelatorioService, WhatsappService, NotificacaoService, NotificacaoFactoryService, TelegramService, CalculadoraService, CalculadoraAdministradorService, CalculadoraVendedorService],
})
export class AppModule {}
