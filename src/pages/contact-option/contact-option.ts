import { ApolloProvider } from './../../providers/apollo/apollo';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import 'rxjs/add/operator/toPromise';
import { Push } from '@ionic-native/push';

/**
 * Generated class for the ContactOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact-option',
  templateUrl: 'contact-option.html',
})
export class ContactOptionPage {
  emailEnable: boolean
  notifEnable: boolean
  constructor(public navCtrl: NavController, public navParams: NavParams, private _apollo: ApolloProvider, private loaderCtrl: LoadingController, private _push: Push) {
    this.emailEnable = false
    this.notifEnable = false
  }

  ionViewDidLoad() {
    this._apollo.getContactOptions()
    .subscribe((res)=>{
      this.emailEnable = res.data['parentContactOptions'].accept_email
      this.notifEnable = res.data['parentContactOptions'].accept_notification
    })
  }

  updateContactOption() {
    var loader = this.loaderCtrl.create({
      content: ''
    })
    loader.present()
    var updatePromises = []
    updatePromises.push(this._apollo.updateContactOption(this.emailEnable,'accept_email').toPromise())
    updatePromises.push(this._apollo.updateContactOption(this.notifEnable,'accept_notification').toPromise())
    Promise.all(updatePromises)
    .then((response)=>{
      if(!this.notifEnable) {
        const pushObject = this._push.init({});
        pushObject.unregister()
      }
      loader.dismiss()
      console.log(response)
    })
  }

}
