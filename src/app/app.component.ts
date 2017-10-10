
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';
import { AfterSplashScreenPage } from '../pages/after-splash-screen/after-splash-screen';
// import { ContactUsPage } from './../pages/contact-us/contact-us';
// declare var TestFairy:any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AfterSplashScreenPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // TestFairy.begin("62c8089044d2af45ac43191018bea59a8f127e6a");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

