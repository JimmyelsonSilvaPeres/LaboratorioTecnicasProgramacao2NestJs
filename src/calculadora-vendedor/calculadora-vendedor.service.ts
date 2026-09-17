import { Injectable } from '@nestjs/common';
import { Calculadora } from 'src/interfaces/calculadora';

@Injectable()
export class CalculadoraVendedorService implements Calculadora {
  calcularPagamento(valor: number): number {
    // Implementação específica para a calculadora do vendedor
    return valor * 0.9; // Exemplo: aplicar um desconto de 10%
  }
}
