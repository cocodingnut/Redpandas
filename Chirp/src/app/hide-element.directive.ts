import { Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHideElement]'
})
export class HideElementDirective {

  constructor(private elementRef: ElementRef) {}

  @HostBinding('style.visibility') visibility = "visible";

  ngOnInit() {
    setTimeout(() => {
      this.visibility = "hidden";
    }, 5000);
  }

}
