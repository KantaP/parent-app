import { Component , ElementRef, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StateProvider } from '../../providers/state/state';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { SetPasswordPage } from '../set-password/set-password';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage{
  elements: any
  key: any
  currentKey: string
  state: any
  phone_m: any
  otp: object
  logo: Promise<string>
  constructor(public navCtrl: NavController, public navParams: NavParams, @Inject(ElementRef) elementRef: ElementRef
  , public _state: StateProvider, public _util: UtilitiesProvider) {
    this.elements = elementRef;
    this.otp  = {
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: ''
    }
    this.currentKey = 'a'
    this.phone_m = this.navParams.get('phone_m')
    this.logo = this._util.getLogo()
  }

  ionViewDidLoad() {
    var inputs = this.elements.nativeElement.querySelectorAll('input')
    for(let i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute('maxLength', 1)
    }
    setTimeout(()=>this.elements.nativeElement.querySelector(`input[name='${this.currentKey}']`).focus(),1000)
  }

  change(move, before) {
    this.currentKey = before
    if(this.otp[this.currentKey] != '') {
      this.currentKey = move
      this.elements.nativeElement.querySelector(`input[name='${this.currentKey}']`).focus()
    }
  }

  validateOTP() {
    var controls = this.otp
    var otp = Object.keys(controls).map((key)=>controls[key].toString()).join('')
    var state = this._state.getState()
    if(state['otp'] != otp) {
      this._util.alertMessage('Invalid OTP', 'The OTP you have entered is incorrect. Please try again or contact your company for assistance.')
    }else{
      this._util.alertMessage('Success!!!', 'Registration was successful, Please set a password to login', 'checkImg')
      this.navCtrl.push(SetPasswordPage)
    }
  }

  requestOTP() {
    this._util.loading('')
    var otp = Math.floor(Math.random() * 900000) + 100000;
    this._state.setState({otp:otp})
    this._util.callSms(this.phone_m,'Here is your one-time 6 digit verification code for the Parent App. This code will expire in 5 minute,  ' + otp)
    .then((data)=>{
      this._util.loaded()
    })
    .catch(()=>{
      this._util.loaded()
    })
  }

}
