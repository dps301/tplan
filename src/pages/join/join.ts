import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class JoinPage {

  name: string = '';
  country: string = '';
  countries: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.getJSON();
  }

  getJSON() {
    this.http.get("./assets/js/countries.json")
    .map((res:any) => res.json())
    .subscribe(
      data => this.countries = data, 
      error => console.log(error)
    );
  }
}
