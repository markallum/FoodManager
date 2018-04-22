import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

  constructor(private renderer: Renderer2, private eleRef: ElementRef) {
  }
}
