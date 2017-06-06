import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CoursePage } from '../pages/course/course';
import { LoginPageModule } from '../pages/login/login.module';
import { CoursePageModule } from '../pages/course/course.module';
import { CourseDatailPageModule } from '../pages/course-datail/course-datail.module';
import { CourseProvider } from '../providers/course/course';
import { PlanProvider } from '../providers/plan/plan';
import { CommonProvider } from '../providers/common/common';
import { HttpService } from '../services/http.service';
import { HttpModule } from "@angular/http";
import { ServerAddr } from '../services/server.addr';
import { PlanPageModule } from '../pages/plan/plan.module';
import { PlanItemComponent } from '../components/plan-item/plan-item';
import { JoinPageModule } from '../pages/join/join.module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    LoginPageModule,
    CoursePageModule,
    PlanPageModule,
    JoinPageModule
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
    CommonProvider
  ]
})
export class AppModule {}
