import { PushOptions, PushObject , Push } from '@ionic-native/push';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import axios from 'axios';
import 'rxjs/add/operator/map';
declare var globalToken;
// const SignInApi = 'http://localhost:3000/login'
// const SendSMSApi = 'http://localhost:3000/sendSMS'
// const EmailVerifyApi = 'http://localhost:3000/prepareEmailVerify'
const SignInApi = 'http://schoolsafe.sg.ecoachmanager.com/login'
const SendSMSApi = 'http://schoolsafe.sg.ecoachmanager.com/sendSMS'
const EmailVerifyApi = 'http://schoolsafe.sg.ecoachmanager.com/prepareEmailVerify'
/*
  Generated class for the UtilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilitiesProvider {

  private alertItem : any = null
  private loaderItem: any = null
  constructor(private alert: AlertController, private loader: LoadingController, private storage: Storage ,
     private platform: Platform, private push: Push) {

  }

  signIn(email:string, password: string) {
    return axios.post(SignInApi,{username:email, password:password})
  }

  prepareEmailVerify(email: string) {
    return axios.post(EmailVerifyApi,{email})
  }

  alertMessage(title:string , message: string, iconClass: string = "closeImg") {
    this.alertItem = this.alert.create({
      title: `<div class="${iconClass} pull-left"></div><div class="pull-left margin-left-10 font-size-16">${title}</div>`,
      message:  message,
      cssClass:'alert-danger',
      buttons: ['OK']
    })
    this.alertItem.present()
  }

  notificationMessage(message: string) {

  }

  loading(message: string) {
    this.loaderItem = this.loader.create({
      content: message
    })
    this.loaderItem.present()
  }

  loaded() {
    if(this.loaderItem != null) {
      this.loaderItem.dismissAll()
      this.loaderItem = null
    }
  }

  callSms(phonenumber , msg) {
    // let smsAuthURL = `https://api.clickatell.com/http/sendmsg?user=${smsapi.username}&password=${smsapi.password}&api_id=${smsapi.apiid}&to=${phonenumber}&text=${msg}`
    // let smsCallback = ""
    // return this.http.get(smsAuthURL)

    // var xhr = new XMLHttpRequest();
    // xhr.open("GET" , smsAuthURL)
    // xhr.onreadystatechange = function(){
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         console.log('success');
    //     }
    // };
    // xhr.send();
    var config = {
        headers: {
          'authorization': "Bearer " + globalToken,
          'Content-Type':'application/json'
        }
    };
    var bodyParameters = JSON.stringify({
      "text": msg,
      "to": phonenumber
    })
    return axios.post(
      SendSMSApi,
      bodyParameters,
      config
    )
  }

  setStorage(key: string, value: any) {
    return this.storage.set(key,value)
  }

  getStorage(key: string) {
    return this.storage.get(key)
  }

  clearStorage() {
    return this.storage.clear()
  }

  removeStorage(key:string){
    return this.storage.remove(key)
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
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  }
}
