import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appSearchField]',
})
export class SearchField {
  elementRef = inject(ElementRef);
  constructor() {
    this.elementRef.nativeElement.autofocus = true;
  }
}
