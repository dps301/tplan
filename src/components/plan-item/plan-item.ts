import { Component, Input } from '@angular/core';

@Component({
  selector: 'plan-item',
  templateUrl: 'plan-item.html'
})
export class PlanItemComponent {
  @Input() title: string = '';
  @Input() startDt: string = '';
  @Input() endDt: string = '';
  @Input() image: string = '';

  constructor() {
  }

}
