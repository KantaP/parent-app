import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { StateProvider } from '../../providers/state/state';
import { ApolloProvider } from '../../providers/apollo/apollo';
import * as moment from 'moment';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
// import { Cookie } from 'ng2-cookies/ng2-cookies';
import { TrackingPage } from '../tracking/tracking';
import { Subscription } from 'apollo-client/util/Observable';
/**
 * Generated class for the ChildrenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface PassengerBySchool {
  school_name?: string;
  passengers: Array<Passenger>;
}

interface Passenger {
  passenger_id?:number;
  first_name?: string;
  surname?: string;
  routeToday?: Array<any>;
}

interface PassengerLog {
  log_type_code?: number;
  log_type_name?: string;
  log_note?: string;
  date_time_scan?: string;
  route_type?: number;
  address?: PassengerLogAddress;
  movement_order?: number;
}

interface PassengerLogAddress {
  collection?: string
  destination?: string
}

interface Address {
  address?: string;
  latlng?: string;
  progress?: number;
  time_start?: string;
  passenger_log?: PassengerLog
}

interface ExtraRoute {
  movement_order?: number;
  latlng?: string;
}

interface passengerRoute {
  collection_address?: Address;
  destination_address?: Address;
  peroid?: string;
  date_today?: string;
  extra_address?: Array<ExtraRoute>
  tracking?: CurrentTracking
}

interface CurrentTracking {
  lat?: string;
  lng?: string;
  timestamp?: string;
  j_id?: number;
}

@Component({
  selector: 'page-children',
  templateUrl: 'children.html',
  animations: [
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition(':enter', [
            // css styles at start of transition
            style({ opacity: 0 }),
            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          // css styles at start of transition
          style({ opacity: 1 }),
          // animation and styles at end of transition
          animate('.3s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ChildrenPage {

  passengerBySchool: Array<PassengerBySchool>
  passengerRoutes: Array<passengerRoute>
  arrowIcon: Array<string>
  showPassengerRoute: Array<boolean>
  _moment: any
  _passengerRoutesData: Array<any>
  // loading: boolean
  refreshNotification: Subscription

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private _util: UtilitiesProvider , private apollo: ApolloProvider,
    private _state: StateProvider) {
      // this.loading = true
      this.arrowIcon = []
      this.showPassengerRoute = []
      this.passengerBySchool = []
      this.passengerRoutes = []
      this._moment = moment
      this._passengerRoutesData = []
      this.refreshNotification  = this._state.onRefresh().subscribe((refresh)=>{
        if(refresh) {
          this.loadPassengers()
          this._state.disableRefresh()
        }
      })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ChildrenPage');
    this.loadPassengers()
  }

  ionViewDidLeave(){
    this.refreshNotification.unsubscribe()
  }

  doRefresh(refresher) {

    this.loadPassengers()
    refresher.complete()
  }



  loadPassengers() {
    this._util.loading('')
    setTimeout(()=>{
      var state = this._state.getState()
      this.apollo.getParentPassengers(state['email'])
      .subscribe(
        res => {
          this._util.loaded()
          // this.loading = res.loading
          this.passengerBySchool = res.data['parentPassengers']
          this.passengerBySchool.forEach((school)=>{
            school.passengers.forEach((item)=>{
              this.arrowIcon.push('ios-arrow-back')
              this.showPassengerRoute.push(false)
            })
          })
        },
        err => {
          this._util.loaded()
        },
      )
    },500)
  }

  toggleDetail(index) {
    this.arrowIcon[index] = (this.arrowIcon[index]=='ios-arrow-down')?'ios-arrow-back':'ios-arrow-down';
    this.showPassengerRoute[index] = !this.showPassengerRoute[index]
    // if(this.arrowIcon[index] == 'ios-arrow-down') {
    //   if(this.passengerRoutes[index] == undefined) {
        // this._util.removeStorage(`passenger_${this.passengers[index].passenger_id}_date_${this._moment().format('DD/MM/YYYY')}`)
        // this._util.getStorage(`passenger_${this.passengers[index].passenger_id}_date_${this._moment().format('DD/MM/YYYY')}`)
        // .then((data)=>{
        //   if(data != null) {
        //     this.passengerRoutes[index] = data
        //   }
        //   else {
        //     this._util.loading('')
        //     this.apollo.getPassengerRouteToday(this.passengers[index].passenger_id)
        //     .subscribe(
        //       res => {
        //         if(res.data['passengerRouteToday'] != null) {
        //           this.passengerRoutes[index] = res.data['passengerRouteToday']
        //           // this._util.setStorage(`passenger_${this.passengers[index].passenger_id}_date_${this._moment().format('DD/MM/YYYY')}`,res.data['passengerRouteToday'])
        //         }
        //         this._util.loaded()
        //       }
        //     )
        //   }
        // })
        // this._util.loading('')
        // if(this._passengerRoutesData[index]) {
        //   this._passengerRoutesData[index].refetch()
        //   this._passengerRoutesData[index].subscribe(
        //     res => {
        //       if(res.data['passengerRouteToday'] != null) {
        //         this.passengerRoutes[index] = res.data['passengerRouteToday']
        //       }
        //       this._util.loaded()
        //     }
        //   )
        // }else{
        //   this._passengerRoutesData[index] = this.apollo.getPassengerRouteToday(this.passengers[index].passenger_id)
        //   this._passengerRoutesData[index].subscribe(
        //     res => {
        //       if(res.data['passengerRouteToday'] != null) {
        //         this.passengerRoutes[index] = res.data['passengerRouteToday']
        //       }
        //       this._util.loaded()
        //     }
        //   )
        // }

    //   }
    // }else{
    //   this.passengerRoutes[index] = undefined
    // }
  }

  peroidText(peroid) {
    if(peroid == 'current') return 'Currrent Journey'
    else if(peroid == 'next') return 'Next Journey'
    else return 'Previous Journey'
  }

  checkRouteLog(routeLog: Array<any>, route_type: number) {
    // should have only 1 row
    // console.log(routeLog)
    // return false;
    if(routeLog.length > 0) {
      var log = routeLog.filter((route)=>(route.route_type == route_type));
      if(log.length == 0) return false;
      else return true;
    }else{
      return false;
    }

  }

  wrongBoarding(routeLog: Array<any>){
    if(routeLog.length > 0) {
      var log = routeLog.filter((route)=>(route.route_type == 1 && route.log_type_code == 3));
      if(log.length == 0) return false;
      else return true
    }else{
      return false
    }
  }

  wrongAlighting(routeLog: Array<any>){
    if(routeLog.length > 0) {
      var log = routeLog.filter((route)=>(route.route_type == 0 && route.log_type_code == 5));
      if(log.length == 0) return false;
      else return true
    }else{
      return false
    }
  }

  showWrongPickUp(routeDetail: Array<any>) {
    if(routeDetail['passenger_log'].length > 0) {
      var log = routeDetail['passenger_log'].filter((route)=>(route.route_type == 1 && route.log_type_code == 3));
      return log[0].address.destination
    }else{
      return 'N/A'
    }
  }
  showWrongDropOff(routeDetail: Array<any>) {
    if(routeDetail['passenger_log'].length > 0) {
      var log = routeDetail['passenger_log'].filter((route)=>(route.route_type == 0 && route.log_type_code == 5));
      return log[0].address.destination
    }else{
      return 'N/A'
    }
  }

  showActualTime(routeLog: Array<any>) {
    if(routeLog.length > 0) {
      var log =  routeLog.filter((route)=>route.route_type == 1);
      return this._moment(log[0]['date_time_scan'],'DD-MM-YYYY HH:mm:ss').format('HH:mm')
    }else{
      return 'N/A'
    }
  }

  showAlightingTime(routeLog: Array<any>) {
    if(routeLog.length > 0) {
      var log =  routeLog.filter((route)=>route.route_type == 0);
      return this._moment(log[0]['date_time_scan'],'DD-MM-YYYY HH:mm:ss').format('HH:mm')
    }else{
      return 'N/A'
    }
  }

  // wrongPickUp(routeLog: Array<any>) {
  //   if(routeLog.length > 0) {
  //     var log = routeLog.filter((route)=>route.route_type == 1 && route.log_type_code == 2);
  //     return log[0]['address'] || ''
  //   }else{
  //     return ''
  //   }
  // }

  // wrongPickUpTime(routeLog: Array<any>){
  //   if(routeLog.length > 0) {
  //     var log = routeLog.filter((route)=>route.route_type == 1 && route.log_type_code == 2);
  //     var datetime = log[0]['date_time_scan'].split(' ')
  //     return datetime[1].substr(0, datetime[1].length - 3) || ''
  //   }else {
  //     return ''
  //   }
  // }

  goToTracking(routeData , passenger) {
    // console.log(routeData)
    // console.log(passenger)
    if(routeData.peroid == 'previous' || routeData.peroid == 'next') return false
    this.navCtrl.push(TrackingPage,{routeData, passenger})
  }
}
