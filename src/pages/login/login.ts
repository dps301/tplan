import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ Facebook, GooglePlus ]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, private gp: GooglePlus) {
  }

  ionViewDidLoad() {
  }

  fbLogin() {
    this.fb.login(['email', 'public_profile'])
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

  googleLogin() {
    this.gp.login({
      'webClientId': '121545600444-7p1mtuvtnabbjg79ro57lva24rj2oj16.apps.googleusercontent.com'
    }).then((res) => {
        alert('res: '+JSON.stringify(res));
    }, (err) => {
        alert('err '+err);
    });
  }
}
