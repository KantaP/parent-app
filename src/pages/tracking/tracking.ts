import { Component , ViewChild , ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import * as moment from 'moment';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
/**
 * Generated class for the TrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

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
  time_start?: string
  address?: string
  progress?: number
  latlng?: string
  passenger_log?: Array<PassengerLog>
}

interface ExtraRoute {
  movement_order?: number;
  latlng?: string;
}

interface CurrentTracking {
  lat?: string;
  lng?: string;
  timestamp?: string;
  j_id?: number;
}

interface RouteData {
  j_id?: number;
  collection_address?: Address;
  destination_address?: Address;
  peroid?: string;
  date_today?: string;
  extra_address?: Array<ExtraRoute>
  tracking?: CurrentTracking
}

interface Passenger {
  first_name?: string
  surname?: string
  passenger_id?: number
}

@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html',
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
export class TrackingPage {
  @ViewChild('map') mapElement: ElementRef
  routeData: RouteData;
  routes: Array<RouteData>
  map: any
  markerArray: Array<any>
  arrowIcon: string;
  passenger: Passenger;
  showJourney: boolean;
  tracking: any;
  _moment: any
  constructor(public navCtrl: NavController, public navParams: NavParams, private _util: UtilitiesProvider) {
    this.routeData = {}
    this.routeData = Object.assign({},this.navParams.data.routeData)
    // this.routeData = this.navParams.data.routeData
    // console.log(this.routeData)

    // console.log(Object.getOwnPropertyDescriptor(this.routeData,'tracking'))
    this.routes = []
    this.routes.push(this.routeData)
    this.passenger = this.navParams.data.passenger
    this.arrowIcon = "ios-arrow-back"
    this.showJourney = false
    this._moment = moment
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TrackingPage');

  }

  toggleShowJourney() {
    this.arrowIcon = (this.arrowIcon=='ios-arrow-down')?'ios-arrow-back':'ios-arrow-down';
    if(this.arrowIcon == 'ios-arrow-down') this.showJourney = true
    else this.showJourney = false
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  ionViewDidLeave() {
    for(let i = 0 ; i < this.markerArray.length; i++) {
      this.markerArray[i].setMap(null)
    }
    this.map = null
  }

  showSteps(directionResult) {
    var myRoute = directionResult.routes[0].legs;
    if(myRoute.length == 1) {
      var marker = new google.maps.Marker({
        position: myRoute[0].start_location,
        map: this.map,
        icon: 'assets/img/bus-stop-icon-blue.png'
      });
      this.markerArray.push(marker);
      marker = new google.maps.Marker({
        position: myRoute[0].end_location,
        map: this.map,
        icon: 'assets/img/bus-stop-icon.png'
      });
      this.markerArray.push(marker);
    }else if (myRoute.length > 1){
      myRoute.forEach((route,index)=>{
        var icon = 'assets/img/bus-stop-icon-black.png'
        var marker = null
        if(index == 0) {
          marker = new google.maps.Marker({
            position: route.start_location,
            map: this.map,
            icon: 'assets/img/bus-stop-icon-blue.png'
          });
          this.markerArray.push(marker);
          marker = new google.maps.Marker({
            position: route.end_location,
            map: this.map,
            icon: icon
          });
          this.markerArray.push(marker);
        }else if(index == myRoute.length-1) {
          marker = new google.maps.Marker({
            position: route.start_location,
            map: this.map,
            icon: icon
          });
          this.markerArray.push(marker);
          marker = new google.maps.Marker({
            position: route.end_location,
            map: this.map,
            icon: 'assets/img/bus-stop-icon.png'
          });
          this.markerArray.push(marker);
        }else{
          marker = new google.maps.Marker({
            position: route.start_location,
            map: this.map,
            icon: icon
          });
          this.markerArray.push(marker);
          marker = new google.maps.Marker({
            position: route.end_location,
            map: this.map,
            icon: icon
          });
          this.markerArray.push(marker);
        }
      })
    }
  }

  loadMap() {
    let element = this.mapElement.nativeElement
    var directionsService = new google.maps.DirectionsService;
    var latlng = this.routeData.collection_address.latlng
    var Latlng = new google.maps.LatLng(parseFloat(latlng.split(',')[0]), parseFloat(latlng.split(',')[1]));
    this.markerArray = [];
    this.map = new google.maps.Map(element, {
      center: Latlng,
      zoom: 8
    });
    var rendererOptions = {
      map: this.map,
      suppressMarkers : true
    }
    var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

    directionsService.route({
      origin: this.routeData.collection_address.latlng,
      destination: this.routeData.destination_address.latlng,
      waypoints: this.routeData.extra_address.map((extra)=>{
        return {
          location:extra.latlng
        }
      }),
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, (response, status)=> {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        this.showSteps(response)
        if(this.routeData.tracking != null) {
          var vehicleMarker = new google.maps.Marker({
            position: new google.maps.LatLng(this.routeData.tracking.lat,this.routeData.tracking.lng),
            map: this.map,
            icon: 'assets/img/green.png'
          })
          console.log(vehicleMarker)
        }
        // this.tracking = this._apollo.trackingVehicle(this.routeData.j_id)
        // this.tracking.subscribe(trackingData=>{
        //     if(trackingData.data['watchTracking'] != null) {
        //       this.routeData.tracking = trackingData.data['watchTracking']
        //       vehicleMarker.setMap(null)
        //       vehicleMarker = null
        //       vehicleMarker = new google.maps.Marker({
        //         position: new google.maps.LatLng(this.routeData.tracking.lat,this.routeData.tracking.lng),
        //         map: this.map,
        //         icon: 'assets/img/green.png'
        //       })
        //     }
        //   // Object.defineProperty(this.routeData, "tracking", {value: trackingData.data['watchTracking'], configurable: true});
        //   }
        // )
      } else {
        this._util.alertMessage('Map Issue','Directions request failed due to ' + status)
      }
    });
  }

  subScribeTracking(trackingData: any) {
    this.routeData.tracking = trackingData
  }

  checkRouteLog(routeLog: Array<any>, route_type: number) {
    // should have only 1 row
    // console.log(routeLog)
    // return false;
    if(routeLog.length > 0) {
      var log = routeLog.filter((route)=>(route.route_type == route_type && route.log_type_code > 0));
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



  peroidText(peroid) {
    if(peroid == 'current') return 'Currrent Journey'
    else if(peroid == 'next') return 'Next Journey'
    else return 'Previous Journey'
  }
}
