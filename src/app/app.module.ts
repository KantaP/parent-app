
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule  } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule }   from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Push } from '@ionic-native/push';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
// import { AngularFireModule } from 'angularfire2';
// import 'firebase';
// import { CloudModule , CloudSettings } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LostPasswordPage } from '../pages/lost-password/lost-password';
import { OtpPage } from '../pages/otp/otp';
import { TrackingPage } from '../pages/tracking/tracking';
import { AfterSplashScreenPage } from '../pages/after-splash-screen/after-splash-screen';
import { SetPasswordPage } from '../pages/set-password/set-password';
import { ChildrenPage } from '../pages/children/children';
import { ContactUsPage } from './../pages/contact-us/contact-us';

import { UtilitiesProvider } from '../providers/utilities/utilities';
import { StateProvider } from '../providers/state/state';

import { DirectivesModule } from '../directives/directives.module'
import { ApolloProvider } from '../providers/apollo/apollo';

declare var globalToken;
// const networkInterface = createNetworkInterface('http://127.0.0.1:3000/graphql');
const networkInterface = createNetworkInterface('http://schoolsafe.sg.ecoachmanager.com/graphql');
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    req.options.headers.authorization = 'Bearer ' + globalToken;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface
})

// const firebase = {
//   apiKey: 'AIzaSyD7B3zdaQ4G63tS2Xny7gFts8Yi-stNh-w',
//   projectId: 'driverapp-1470129684507',
//   messagingSenderId: '25666590030'
// }

// const cloudSetting: CloudSettings = {
//   core:{
//     app_id: "38910cff"
//   },
//   push: {
//     sender_id: "25666590030",
//     pluginConfig: {
//       android: {
//         iconColor: '#097cd2'
//       }
//     }
//   }
// }

export function provideClient(): ApolloClient {
  return client
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LostPasswordPage,
    OtpPage,
    SetPasswordPage,
    AfterSplashScreenPage,
    ChildrenPage,
    TrackingPage,
    ContactUsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    HttpModule,
    DirectivesModule,
    ApolloModule.withClient(provideClient),
    IonicStorageModule.forRoot({
      name: '__parentapp',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    BrowserAnimationsModule,
    // CloudModule.forRoot(cloudSetting),
    // AngularFireModule.initializeApp(firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LostPasswordPage,
    OtpPage,
    SetPasswordPage,
    AfterSplashScreenPage,
    ChildrenPage,
    TrackingPage,
    ContactUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilitiesProvider,
    StateProvider,
    ApolloProvider,
    Push,
    FileTransfer,
    File
  ]
})
export class AppModule {}
