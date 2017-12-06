import { ContactOptionPage } from './../contact-option/contact-option';
import { ContactUsPage } from './../contact-us/contact-us';
import { Component } from '@angular/core';
import { NavController, MenuController  } from 'ionic-angular';
import { ChildrenPage } from '../children/children';
import { StateProvider } from '../../providers/state/state';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { LoginPage } from '../login/login';
import { SetPasswordPage } from '../set-password/set-password';
import { Push } from '@ionic-native/push';
// import { Cookie } from 'ng2-cookies/ng2-cookies';
declare var globalToken;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage: any
  childrenPage: any
  setPasswordPage: any
  contactUsPage: any
  contackOptionPage: any
  constructor(public navCtrl: NavController, private _state: StateProvider, private _util: UtilitiesProvider ,
    private menu: MenuController , private push: Push) {
    this.rootPage = ChildrenPage
    this.childrenPage = ChildrenPage
    this.setPasswordPage = SetPasswordPage
    this.contactUsPage = ContactUsPage
    this.contackOptionPage = ContactOptionPage
  }

  ionViewDidLoad() {

  }

  goToPage(page) {
    this.rootPage = page
    this.menu.close()
  }

  logOut() {
    // Cookie.delete('token')
    const pushObject = this.push.init({});
    pushObject.unregister()
    globalToken = ''
    this._state.clearState()
    this._util.removeStorage('userProfile')
    this._util.removeStorage('fcm_token')
    this.navCtrl.setRoot(LoginPage)
  }

}
