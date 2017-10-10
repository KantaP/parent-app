import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { StateProvider } from '../../providers/state/state';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
declare var globalToken;

/**
 * Generated class for the AfterSplashScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-after-splash-screen',
  templateUrl: 'after-splash-screen.html',
})
export class AfterSplashScreenPage {


  constructor(public navCtrl: NavController, public navParams: NavParams , private _util: UtilitiesProvider,
    private _state: StateProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AfterSplashScreenPage');
    this._util.loading('')
    this._util.getStorage('passFirstRegister')
    .then((data)=>{
      setTimeout(()=>{
        this._util.loaded()
          if(data != null) {
            this._util.getStorage('userProfile')
            .then((data)=>{
              if(data != null) {
                this._util.signIn(data['email'], data['password'])
                .then((response)=>{
                  this._util.loaded()
                  if(response.status == 200) {
                    this._state.setState(response.data.user)
                    var userProfile = Object.assign({},response.data.user,{password: data['password']})
                    this._util.setStorage('userProfile',userProfile)
                    globalToken = response.data.token
                    this.navCtrl.setRoot(HomePage)
                  }else if(response.status == 401){
                    globalToken = ''
                    this._util.alertMessage('Authenticate','Your password changed. Please contact your company for assistance.')
                    this.navCtrl.setRoot(LoginPage)
                  }
                })
              }else {
                this.navCtrl.setRoot(LoginPage)
              }
            })
          }else{
            this.navCtrl.setRoot(RegisterPage,{canSkipRegistered: true})
          }
      },1000)
    })
  }

}
