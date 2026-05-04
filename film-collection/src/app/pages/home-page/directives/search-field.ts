import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appSearchField]',
  standalone: true
})
export class SearchField {
  elementRef = inject(ElementRef);
  constructor() {
    this.elementRef.nativeElement.autofocus = true;
  }
}
