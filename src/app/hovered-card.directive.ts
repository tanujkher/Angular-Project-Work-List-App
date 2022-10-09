import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoveredCard]',
})
export class HoveredCardDirective {
  @HostBinding('class.isHoveredCard') hovered: boolean = false;
  @HostListener('mouseenter') mouseEnter() {
    this.hovered = true;
  }
  @HostListener('mouseleave') mouseLeave() {
    this.hovered = false;
  }

  constructor() {}
}
