import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelDetailPage } from '../hotel-detail/hotel-detail';

@IonicPage()
@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {
  title: string = '';
  location: Array<any> = ['Seoul', 'Busan', 'Jeju','Daegu', 'JeonJu'];
  innData: Array<any> = [
    {
      "name": "Apple Tree Hotel",
      "location": "558, Handong-ro, Namsong-ri, Heunghae-eup, Buk-gu",
      "image": "http://52.78.230.42:3000/aw/d.png"
    },
    {
      "name": "Hwanho Tree Hotel",
      "location": "558, Handong-ro, Namsong-ri, Heunghae-eup, Buk-gu",
      "image": "http://52.78.230.42:3000/aw/e.png"
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('title');
  }
  goDetail(name: string, location: string, image: string) {
    this.navCtrl.push(HotelDetailPage, {name: name, location: location, image: image});
  }

}
