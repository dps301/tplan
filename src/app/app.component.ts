import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { CoursePage } from '../pages/course/course';
import { PlanPage } from '../pages/plan/plan';
import { LoginSessionService } from '../services/login.session';
import { JoinPage } from '../pages/join/join';
import { UtilService } from '../services/util.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;
  
  rootPage :any;

  coursePage = CoursePage;
  loginPage = LoginPage;
  planPage = PlanPage;
  joinPage = JoinPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private loginSession: LoginSessionService, private util: UtilService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      this.rootPage = this.coursePage;
    });
  }

  changeTab(tab) {
    this.nav.setRoot(tab);
  }

  logout() {
    this.loginSession.clear();
    this.util.showAlert('', 'Logout success');
  }
}

