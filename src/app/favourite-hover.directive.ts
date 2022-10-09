import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavouriteHover]',
})
export class FavouriteHoverDirective {
  @HostBinding('class.isRed') isFavourite: boolean = true;
  @Input() set appFavouriteHover(value) {
    this.isFavourite = value;
  }

  @HostBinding('class.isRed-hover') hovered: boolean = false;
  @HostListener('mouseenter') mouseEnter() {
    this.hovered = true;
  }
  @HostListener('mouseleave') mouseLeave() {
    this.hovered = false;
  }

  constructor() {}
}
