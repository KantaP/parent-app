import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { StateProvider } from '../../providers/state/state';
import { LoginPage } from '../login/login'
import { ApolloProvider } from '../../providers/apollo/apollo';
declare var globalToken;

/**
 * Generated class for the SetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-set-password',
  templateUrl: 'set-password.html',
})
export class SetPasswordPage {

  showMenuButton: boolean
  passwordForm : FormGroup
  logo: Promise<string>
  constructor(public navCtrl: NavController, public navParams: NavParams ,
    private apollo: ApolloProvider, private _fb: FormBuilder , private _util: UtilitiesProvider, private _state: StateProvider) {
    this.passwordForm = this._fb.group({
      password1: ['',Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
      ])],
      password2: ['',Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
      ])]
    })
    this.showMenuButton = false

  }

  ngAfterViewInit() {
    this._util.getStorage('userProfile')
    .then((data)=>{
      if(data != null) this.showMenuButton = true
    })
    this.logo = this._util.getLogo()
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SetPasswordPage');
  }

  nextStep() {
    var { password1 , password2 } = this.passwordForm.controls
    if(password1.value != password2.value) {
      this._util.alertMessage('Invalid Password' , 'Passwords do not match')
    }else{
      var state = this._state.getState()
      this._util.loading('')
      this.apollo.setPassword(state['email'],password1.value)
      .subscribe(
        res => {
          this._util.loaded()
          if(res.data['parentPasswordUpdate'] != null) {
            if(!res.data['parentPasswordUpdate']['status']) {
              this._util.alertMessage('Failed!!!','Please contact to your company for assistance.')
            }else{
              this._util.setStorage('passFirstRegister', true)
              this._state.clearState()
              this._util.removeStorage('userProfile')
              this._util.alertMessage('Success!!!','Success, You can now use your email and password to login.','checkImg')
              this.navCtrl.setRoot(LoginPage)
              globalToken = ""
            }
          }else{
            this._util.alertMessage('Failed!!!','Please contact to your company for assistance.')
          }
        }
      )
    }
  }



}
