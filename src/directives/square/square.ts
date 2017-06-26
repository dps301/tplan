import { Directive, ElementRef, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[square]' // Attribute selector
})
export class Square implements AfterViewChecked {

  constructor(public el: ElementRef, private cdRef: ChangeDetectorRef) {
  }
  
  ngAfterViewInit() {
    // this.el.nativeElement.style.height = this.el.nativeElement.offsetWidth + 'px';
  }

  ngAfterViewChecked() {
    this.el.nativeElement.style.height = this.el.nativeElement.offsetWidth + 'px';
  }
}