import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoSub'
})
export class AutoSubPipe implements PipeTransform {
  max: number = 20;
  transform(value: string): string {
    if (value.length <= this.max) {
      return value;
    }
    else {
      return `${value.substring(0, this.max)}...`;
    }
  }

}
