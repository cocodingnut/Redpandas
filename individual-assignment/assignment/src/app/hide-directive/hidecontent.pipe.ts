import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidecontent'
})
export class HidecontentPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    else if (value.length <= 20) {
      return value;
    }
    return value.substring(0, 20) + '...';
  }

}
