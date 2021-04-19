import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString',
})
export class CutStringPipe implements PipeTransform {
  transform(value: string, length: string): string {
    return value.length > parseInt(length)
      ? value.substring(0, parseInt(length)) + '...'
      : value;
  }
}
