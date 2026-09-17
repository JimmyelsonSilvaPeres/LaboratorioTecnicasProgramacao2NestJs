import { Controller, Get, Param } from '@nestjs/common';
import { CalculadoraAdministradorService } from 'src/calculadora-administrador/calculadora-administrador.service';
import { CalculadoraVendedorService } from 'src/calculadora-vendedor/calculadora-vendedor.service';
import { CalculadoraService } from 'src/calculadora/calculadora.service';

@Controller('calculadora-pagamento')
export class CalculadoraPagamentoController {
  constructor(
    private readonly calculadoraService: CalculadoraService,
    private readonly calculadoraAdministradorService: CalculadoraAdministradorService,
    private readonly calculadoraVendedorService: CalculadoraVendedorService,
  ) {}
  @Get('admin/:idUsuario')
  getCalcularPagamentoAdministrador(@Param('idUsuario') idUsuario: number) {
    return this.calculadoraService.calcularPagamento(
      idUsuario,
      1000,
      this.calculadoraAdministradorService,
    );
  }
  @Get('vendedor/:idUsuario')
  getCalcularPagamentoVendedor(@Param('idUsuario') idUsuario: number) {
    return this.calculadoraService.calcularPagamento(
      idUsuario,
      1000,
      this.calculadoraVendedorService,
    );
  }
}
