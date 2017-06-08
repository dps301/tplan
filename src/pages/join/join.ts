import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import { CoursePage } from '../course/course';
import { LoginSessionService } from '../../services/login.session';

@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class JoinPage {

  id: string = null;
  name: string = '';
  country: string = '';
  countries: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private commonProvider: CommonProvider, private loginSession: LoginSessionService) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
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

  join() {
    this.commonProvider.addUser(this.id, this.name, this.country)
    .subscribe(
      data => {
        console.log('가입완료');
        this.loginSession.set(this.id);
        alert('Welcome! ' + this.name);
        this.navCtrl.setRoot(CoursePage);
      },
      error => {
        console.log('가입에러');
        alert('Join failed!');
        this.navCtrl.pop();
      }
    );
  }
}
