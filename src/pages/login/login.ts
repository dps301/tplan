import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { CommonProvider } from '../../providers/common/common';
import { JoinPage } from '../join/join';
import { LoginSessionService } from '../../services/login.session';
import { CoursePage } from '../course/course';
import { UtilService } from '../../services/util.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ Facebook, GooglePlus ]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, private gp: GooglePlus, private commonProvider: CommonProvider, private loginSession: LoginSessionService, private util: UtilService) {
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
        this.util.showAlert('Error', JSON.stringify(message));
      }
    );
  }

  googleLogin() {
    this.gp.login({
      'webClientId': '121545600444-7p1mtuvtnabbjg79ro57lva24rj2oj16.apps.googleusercontent.com'
    }).then((res) => {
      this.checkIsUser(res.userId);
    }, (err) => {
        this.util.showAlert('Error', err);
    });
  }

  checkIsUser(id) {
    this.commonProvider.getUser(id)
    .map(data => data.json())
    .subscribe(
      data => {
        this.loginSession.set(data[0].id, data[0].name, data[0].nation);
        this.util.showToast('top', data[0].name);
        this.navCtrl.setRoot(CoursePage);
      },
      error => {
        this.navCtrl.push(JoinPage, {"id": id});
      }
    );
  }
}
