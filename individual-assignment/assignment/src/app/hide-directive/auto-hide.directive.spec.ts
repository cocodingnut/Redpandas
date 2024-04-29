import { ElementRef } from '@angular/core';
import { AutoHideDirective } from './auto-hide.directive';

describe('AutoHideDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef<any>; // Mock ElementRef instance
    const directive = new AutoHideDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
