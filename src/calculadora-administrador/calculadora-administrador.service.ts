import { Injectable } from '@nestjs/common';
import { Calculadora } from 'src/interfaces/calculadora';

@Injectable()
export class CalculadoraAdministradorService implements Calculadora {
  calcularPagamento(valor: number): number {
    // Implementação específica para a calculadora do administrador
    return valor * 1.1; // Exemplo: aplicar um acréscimo de 10%
  }
}
