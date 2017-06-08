import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ Facebook, GooglePlus ]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, private gp: GooglePlus, private commonProvider: CommonProvider) {
  }

  ionViewDidLoad() {
  }

  fbLogin() {
    this.fb.login(['email', 'public_profile'])
    .then(
      (result) => {
        this.checkIsUser(result.authResponse.userID);
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
      this.checkIsUser(res.userId);
    }, (err) => {
        alert('err '+err);
    });
  }

  checkIsUser(id) {
    this.commonProvider.getUser(id)
    .map(data => data.json())
    .subscribe(
      data => {
        
      },
      error => {

      }
    );
  }
}
