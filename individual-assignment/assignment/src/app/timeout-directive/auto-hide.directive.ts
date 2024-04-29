import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective {

  constructor(private elementRef: ElementRef) {
    setTimeout(() => {
      this.elementRef.nativeElement.style.display = 'none';
    }, 5000)
  }

}
