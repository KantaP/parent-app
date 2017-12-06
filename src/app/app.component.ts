
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
// import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';
import { AfterSplashScreenPage } from '../pages/after-splash-screen/after-splash-screen';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpHeaders } from '@angular/common/http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { HttpErrorResponse } from '@angular/common/http';
// import { ContactUsPage } from './../pages/contact-us/contact-us';
// declare var TestFairy:any;

declare var globalToken;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AfterSplashScreenPage;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private push: Push , apollo: Apollo, httpLink: HttpLink) {
    platform.ready().then(() => {
      // TestFairy.begin("62c8089044d2af45ac43191018bea59a8f127e6a");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initPushNotification()
      //http://127.0.0.1:3000/graphql
      //http://schoolsafe.sg.ecoachmanager.com/graphql
      var http = httpLink.create({ uri: 'http://schoolsafe.sg.ecoachmanager.com/graphql' })

      const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        const networkErrorRef:HttpErrorResponse = networkError as HttpErrorResponse;
        if (networkErrorRef) console.log(`[Network error]: ${networkErrorRef}`);
      });
      const middleware = setContext(() => ({
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + globalToken || null)
      }));
      const link = errorLink.concat(middleware.concat(http));
      apollo.create({
        link:link,
        cache: new InMemoryCache(),
        // ssrMode: true,
        // ssrForceFetchDelay: 100,
        // connectToDevTools: true,
        // queryDeduplication: true,
        defaultOptions: {
          watchQuery: {
            errorPolicy: 'all'
          }
        }
      })
      // if(platform.is('android')) {
        // setInterval(()=>{
        //   console.log(Date.now())
        // },1000)
      // }
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
      if (data.additionalData.foreground) {
        // if application open, show popup
        // alert(data.message)
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

