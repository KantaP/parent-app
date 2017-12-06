import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { StateProvider } from '../../providers/state/state';
import { ApolloProvider } from '../../providers/apollo/apollo';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
declare var globalToken;
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _fb: FormBuilder, private _util: UtilitiesProvider, private _state: StateProvider ,
    private push: Push, private platform: Platform, private _apollo: ApolloProvider,
    private transfer: FileTransfer, private file: File) {
    this.loginForm = this._fb.group({
      email: ['',Validators.compose([
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required])
      ],
      password: ['',Validators.required]
    })
  }

  ionViewWillEnter() {
    // if(this.platform.is('cordova')) {this.push.unregister()}
  }

  registerFCMToken() {
    return new Promise((resolve,reject)=>{
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

      pushObject.on('registration').subscribe((data: any) => {
        console.log('device token -> ' + data.registrationId);
        this._util.setStorage('fcm_token',data.registrationId)
        .then(()=>{
          this._apollo.setPushToken(data.registrationId)
          .subscribe((res)=>{
            resolve(true)
          })
        })
        //TODO - send device token to server
      });
    })

  }

  login() {
    var { email , password } = this.loginForm.controls
    this._util.loading('')
    this._util.signIn(email.value,password.value)
    .then(async (response)=>{
      if(response.status == 200) {
        this._state.setState(response.data.user)
        var userProfile = Object.assign({},response.data.user,{password: password.value})
        this._util.setStorage('userProfile',userProfile)
        globalToken = response.data.token
        if(this.platform.is('cordova')) {
          var registerResult = await this.registerFCMToken()
          console.log('register result:' , registerResult)
          var promiseDownload = []
          userProfile.companiesLogo.forEach((item)=>{
            promiseDownload.push(this.download(item.logo, item.companyName + '_school.jpg'))
          })
          if(promiseDownload.length > 0) {
            Promise.all(promiseDownload)
            .then((response)=>{
              console.log(response)
              this._util.loaded()
              this.navCtrl.setRoot(HomePage)
            })
          }else{
            this._util.loaded()
            this.navCtrl.setRoot(HomePage)
          }
        }else{
          this._util.loaded()
          this.navCtrl.setRoot(HomePage)
        }
      }else{
        this._util.alertMessage('Failed login','Email address or password not valid')
      }
    })
    .catch((err)=>{
      this._util.alertMessage('Failed login','Email address or password not valid')
      this._util.loaded()
    })
  }

  download(urlImage, fileName) {
    return new Promise((resolve,reject)=>{
      const fileTransfer: FileTransferObject = this.transfer.create();
      var url = encodeURI(urlImage);
      fileTransfer.download(url, this.file.externalDataDirectory + fileName)
        .then((entry)=>{
          resolve('download complete: ' + entry.toURL())
          console.log('download complete: ' + entry.toURL());
        }, (error) => {
          reject(error)
          console.log("error", "Error file transfert", error);
      });
    })

  }

  register() {
    this.navCtrl.push(RegisterPage)
  }

}
