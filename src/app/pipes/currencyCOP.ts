import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyColombian',
  standalone: true
})
export class CurrencyColombianPipe implements PipeTransform {
  
  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: any): any {
    if (!value) return '';

    return this.currencyPipe.transform(value, 'COP', true, '1.0-0', 'es-CO');
  }
}