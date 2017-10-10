import { ApolloProvider } from './../../providers/apollo/apollo';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface SchoolData {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
}

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  schoolData: SchoolData
  constructor(public navCtrl: NavController, public navParams: NavParams, private _apollo: ApolloProvider) {
    this.schoolData = {}
  }

  ionViewDidLoad() {
    this._apollo.getSchoolContact()
    .subscribe((res)=>{
      if(res.data['schoolContact'] != null) {
        this.schoolData = res.data['schoolContact'][0]
        console.log(this.schoolData)
      }
    })
  }
}
