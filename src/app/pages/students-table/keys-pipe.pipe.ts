import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysPipe',
})
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    return Object.keys(value);
  }
}
