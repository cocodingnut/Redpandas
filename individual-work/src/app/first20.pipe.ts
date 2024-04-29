import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first20'
})
export class First20Pipe implements PipeTransform {

  transform(value: string, limit: number = 20): string {
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit);
  }

}
