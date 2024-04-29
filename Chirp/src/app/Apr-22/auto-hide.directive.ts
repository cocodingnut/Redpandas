import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective implements OnInit{

  constructor() { }
  @HostBinding('style.display') display: string = 'block';

  ngOnInit(): void {
      setTimeout(() => {
        console.log("ded");
        this.display = 'none';
      }, 5000
      )
  }

}
