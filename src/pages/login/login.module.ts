import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { JoinPageModule } from '../join/join.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    JoinPageModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
