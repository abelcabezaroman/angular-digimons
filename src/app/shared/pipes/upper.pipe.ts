import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'upper'})
export class UpperPipe implements PipeTransform {
  transform(value: string, exponent?: string): string {
    value = exponent + value + exponent;
    return value.toUpperCase();
  }
}

