import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HotelDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hotel-detail',
  templateUrl: 'hotel-detail.html',
})
export class HotelDetailPage {

  name: string = '';
  location: string = '';
  image: string = '';
  map: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.image = this.navParams.get('image');
    this.name = this.navParams.get('name');
    this.location = this.navParams.get('location');
    this.map = this.navParams.get('map');
  }

}
