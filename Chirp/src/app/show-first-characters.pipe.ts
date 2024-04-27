import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showFirstCharacters'
})
export class ShowFirstCharactersPipe implements PipeTransform {

  transform(value: string): string {
    const maxLength = 20;
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.substring(0, maxLength) + '...';
    }
  }

}


