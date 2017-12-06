
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule  } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule }   from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Push } from '@ionic-native/push';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


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
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloModule } from 'apollo-angular';
import { ContactOptionPage } from '../pages/contact-option/contact-option';

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
    ContactUsPage,
    ContactOptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp ,   {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false

}),
    ReactiveFormsModule,
    HttpModule,
    DirectivesModule,
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    IonicStorageModule.forRoot({
      name: '__parentapp',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    BrowserAnimationsModule,
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
    ContactUsPage,
    ContactOptionPage
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
