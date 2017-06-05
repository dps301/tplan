import { Component, Input } from '@angular/core';

@Component({
  selector: 'plan-item',
  templateUrl: 'plan-item.html'
})
export class PlanItemComponent {
  @Input() title: string = '';
  @Input() upd: string = '';
  @Input() image: string = '';

  constructor() {
  }

}
