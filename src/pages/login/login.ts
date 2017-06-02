import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ Facebook ]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  fbLogin() {
    this.fb.login(['email', 'public_profile', 'user_friends'])
    .then(
      (result) => {
        alert("FACEBOOK:" + JSON.stringify(result));
      }, 
      (message) => {
        console.log('Error logging in');
        alert(JSON.stringify(message));
      }
    );
  }
}
