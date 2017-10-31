import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { StateProvider } from '../../providers/state/state';
import { ApolloProvider } from '../../providers/apollo/apollo';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { Push , PushToken, IPushMessage }from '@ionic/cloud-angular';
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
    private push: Push, private platform: Platform, private _apollo: ApolloProvider) {
    this.loginForm = this._fb.group({
      email: ['',Validators.compose([
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required])
      ],
      password: ['',Validators.required]
    })
  }

  ionViewWillEnter() {
    if(this.platform.is('cordova')) {this.push.unregister()}
  }

  login() {
    var { email , password } = this.loginForm.controls
    this._util.loading('')
    this._util.signIn(email.value,password.value)
    .then((response)=>{
      
      if(response.status == 200) {
        this._state.setState(response.data.user)
        var userProfile = Object.assign({},response.data.user,{password: password.value})
        this._util.setStorage('userProfile',userProfile)
        globalToken = response.data.token
         if(this.platform.is('cordova')) {
          this.push.register().then((t: PushToken)=>{
            return this.push.saveToken(t)
          })
          .then((t: PushToken)=>{
            this.push.rx.notification().subscribe((pushData: IPushMessage)=>{
              alert(pushData.text)
            })
            this._apollo.setPushToken(email.value,t.token)
            .subscribe((res)=>{
              this._util.loaded()
              this.navCtrl.setRoot(HomePage)
            })
          })
          .catch((err)=>{
            alert(err.message)
          })
         }else{
           this._util.loaded()
           this.navCtrl.setRoot(HomePage)
         }
      }else{
        this._util.alertMessage('Failed login','Email address or password not valid')
      }
    })
    .catch((err)=>{
      this._util.alertMessage('Failed login',err.message)
      this._util.loaded()
    })
  }

  register() {
    this.navCtrl.push(RegisterPage)
  }

}
