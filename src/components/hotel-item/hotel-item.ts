import { Component } from '@angular/core';

/**
 * Generated class for the HotelItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'hotel-item',
  templateUrl: 'hotel-item.html'
})
export class HotelItemComponent {

  text: string;

  constructor() {
    console.log('Hello HotelItemComponent Component');
    this.text = 'Hello World';
  }

}
