import { Injectable } from '@nestjs/common';
import { Calculadora } from 'src/interfaces/calculadora';

@Injectable()
export class CalculadoraService {
  calcularPagamento(
    idUsuario: number,
    valor: number,
    calculadora: Calculadora,
  ): number {
    console.log(`Recuperando Usuario con ID: ${idUsuario}`);
    const resultado = calculadora.calcularPagamento(valor);
    console.log(`Salvando no banco de dados historico: ${idUsuario}`);
    console.log(`Valor ${resultado} salvo em banco`);
    return resultado;
  }
}
