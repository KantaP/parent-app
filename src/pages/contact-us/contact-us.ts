import { ApolloProvider } from './../../providers/apollo/apollo';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
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
  schoolLogo: string
  logo: Promise<string>
  constructor(public navCtrl: NavController, public navParams: NavParams, private _apollo: ApolloProvider, private file: File, private _util: UtilitiesProvider) {
    this.schoolData = {}
    this.schoolLogo = ""
    this.logo = this._util.getLogo()
  }

  ionViewDidLoad() {
    this._apollo.getSchoolContact()
    .subscribe((res)=>{
      if(res.data['schoolContact'] != null) {
        this.schoolData = res.data['schoolContact'][0]
        this.schoolLogo = this.file.externalDataDirectory + this.schoolData.name + '.jpg'
        console.log(this.schoolData)
      }
    })
  }
}
