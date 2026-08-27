import { Controller, Get, Param } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';

@Controller()
export class RelatorioController {
  constructor(private readonly relatorioService: RelatorioService) {}
  @Get('relatorio-creditos/:id')
  getRelatorio(@Param('id') id: number) {
    return this.relatorioService.gerarRelatorioCreditos(id);
  }
  @Get('relatorio-usuarios/:id')
  getRelatorioUsuarios(@Param('id') id: number) {
    return this.relatorioService.gerarRelatorioUsuarios(id);
  }
}
