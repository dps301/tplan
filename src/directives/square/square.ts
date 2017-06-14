import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[square]' // Attribute selector
})
export class Square implements AfterViewInit {

  constructor(public el: ElementRef) {
  }
  
  ngAfterViewInit() {
    this.el.nativeElement.style.height = this.el.nativeElement.offsetWidth + 'px';
  }
}