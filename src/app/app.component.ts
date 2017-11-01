
import { Component } from '@angular/core';
import { Platform , Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
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

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private push: Push, private event: Events ) {
    platform.ready().then(() => {
      // TestFairy.begin("62c8089044d2af45ac43191018bea59a8f127e6a");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initPushNotification()
      if(platform.is('android')) {
        // setInterval(()=>{
        //   console.log(Date.now())
        // },1000)
        this.event.subscribe('recievedMessage' , (data) => {console.log('recieved event',data)})
      }
    });
  }
  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    const options: PushOptions = {
      android: {},
      ios: {
        alert: 'true',
        badge: false,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((data: any) => {
      console.log('message -> ' + data.message);
      console.log(data)
      //if user using app and push notification comes
      this.event.publish('recievedMessage',data)
      if (data.additionalData.foreground) {
        // if application open, show popup
        alert(data.message)
      } else {

        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        // this.navCtrl.push(DetailsPage, { message: data.message });
        // console.log('Push notification clicked');
      }
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  }
}

