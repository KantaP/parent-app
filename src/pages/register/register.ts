import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { StateProvider } from '../../providers/state/state';
import { ApolloProvider } from '../../providers/apollo/apollo';
import { OtpPage } from '../otp/otp';
declare var globalToken;
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  showBackButton: boolean
  canSkipRegistered: any
  registerForm : FormGroup
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _fb: FormBuilder ,
    private util: UtilitiesProvider,
    private state: StateProvider,
    private apollo: ApolloProvider) {

    this.registerForm = this._fb.group({
      email: ['', [Validators.required]]
    })


    if(this.navCtrl.canGoBack()) this.showBackButton = true;
    else this.showBackButton = false;
    this.canSkipRegistered = this.navParams.get('canSkipRegistered')
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RegisterPage');
  }

  skipRegister() {
    this.util.setStorage('passFirstRegister', true)
    this.state.clearState()
    this.util.removeStorage('userProfile')
    this.navCtrl.setRoot(LoginPage)
  }

  nextStep() {
    var { email } = this.registerForm.controls
    if(email.value == '') {
      this.util.alertMessage('Invalid Email Address','Please input your email.')
      return false
    }
    else if(!/^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
      this.util.alertMessage('Invalid Email Address','Please check your email pattern.')
      return false
    }
    this.util.loading('')
    this.util.prepareEmailVerify(email.value)
    .then((res)=>{
      // alert(res.data['token'])
      if(res.data['token'] == ''){
        this.util.loaded()
        this.util.alertMessage('Invalid Email Address','The email address you have entered is not recognised. Please contact your company for assistance.')
      }else{
        globalToken = res.data['token']
        // Cookie.set('token',res.data['token'])
        // alert(globalToken)
        setTimeout(()=>{
          this.apollo.getParent(email.value)
          .subscribe((res)=>{
            var otp = Math.floor(Math.random() * 900000) + 100000;
            this.state.setState({otp:otp,email:email.value})
            var phone = res.data['parentGlobalSelect']['phone']
            this.util.callSms(phone,'Here is your one-time 6 digit verification code for the Parent App. This code will expire in 5 minute, ' + otp)
            .then((res)=>{
              this.util.loaded()
              this.navCtrl.push(OtpPage,{phone_m: phone})
            })
            .catch((err)=>{
              this.util.alertMessage('Call SMS',err.message)
              this.util.loaded()
            })
          },
          (err)=>{
            this.util.loaded()
            this.util.alertMessage('Invalid Email Address',err.message)
          })
        },1000)
      }
    })
    // this.apollo.getParent(email.value)
    // .subscribe(
    //   res => {
    //     // alert(res.data['parent'])
    //     if(res.data['parent'] != null) {
    //       var otp = Math.floor(Math.random() * 900000) + 100000;
    //       this.state.setState({otp:otp,email:email.value})
    //       var phone = res.data['parent']['phone_m']
    //       this.util.callSms(phone,'Here is your one-time 6 digit verification code for the Parent App. This code will expire in 5 minute, ' + otp)
    //       .then((res)=>{
    //         // alert(res)
    //         this.util.loaded()
    //         this.navCtrl.push(OtpPage,{phone_m: phone})
    //       })
    //       .catch((err)=>{
    //         this.util.alertMessage('Call SMS',err.message)
    //         this.util.loaded()
    //       })
    //     }else{
    //       this.util.alertMessage('Invalid Email Address','The email address you have entered is not recognised. Please contact your company for assistance.')
    //     }
    //   },
    //   err => {
    //     // alert(err.message)
    //     this.util.alertMessage('Invalid Email Address',err.message)
    //     this.util.loaded()
    //   }
    // )
  }

}
