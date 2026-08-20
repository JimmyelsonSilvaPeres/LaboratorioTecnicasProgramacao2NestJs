import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { SistemaController } from './sistema/sistema.controller';

@Module({
  imports: [],
  controllers: [UsuarioController, SistemaController],
  providers: [],
})
export class AppModule {}
