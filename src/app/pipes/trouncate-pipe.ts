import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trouncate',
  standalone: true,
})
export class TrouncatePipe implements PipeTransform {
  transform(value: string, limit: number = 100, trail: string = '...'): string {
    if(!value) return '';
    return value.length > limit ? value.slice(0,limit) + trail : value;
  }

}
