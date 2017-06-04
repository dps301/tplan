import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-item',
  templateUrl: 'course-item.html'
})
export class CourseItemComponent {
  @Input('id') id: number;
  @Input('title') title: string;
  @Input('image') image: string;
  @Input('content') content: number;
  @Input('like') like: number;

  constructor() {
  }
}
