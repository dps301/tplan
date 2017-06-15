import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelDetailPage } from '../hotel-detail/hotel-detail';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {
  title: string = '';
  location: Array<any> = ['Seoul', 'Busan', 'Jeju','Daegu', 'JeonJu'];
  innData: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('title');
    this.getHotel();
  }
  goDetail(name: string, location: string, image: string) {
    this.navCtrl.push(HotelDetailPage, {name: name, location: location, image: image});
  }
  getHotel() {
    this.commonProvider.getHotel()
    .subscribe(
      data => {
        this.innData = data.json()
      }
    )
  }

}
