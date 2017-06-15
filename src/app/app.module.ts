import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { CoursePageModule } from '../pages/course/course.module';
import { CourseProvider } from '../providers/course/course';
import { PlanProvider } from '../providers/plan/plan';
import { CommonProvider } from '../providers/common/common';
import { HttpService } from '../services/http.service';
import { HttpModule } from "@angular/http";
import { ServerAddr } from '../services/server.addr';
import { PlanPageModule } from '../pages/plan/plan.module';
import { JoinPageModule } from '../pages/join/join.module';
import { LoginSessionService } from '../services/login.session';
import { NativeStorage } from '@ionic-native/native-storage';
import { VariableService } from '../services/variable';
import { Square } from '../directives/square/square';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    LoginPageModule,
    CoursePageModule,
    PlanPageModule,
    JoinPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    ServerAddr,
    CourseProvider,
    PlanProvider,
    CommonProvider,
    LoginSessionService,
    NativeStorage,
    VariableService
  ]
})
export class AppModule {}
