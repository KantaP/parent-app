import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/*
  Generated class for the StateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StateProvider {

  // private state:Subject<any>
  private state : any
  private refresher: Subject<boolean>
  constructor() {
    this.state = {}
    this.refresher = new Subject<boolean>()
    // this.state = new Subject<any>()
  }

  public setState(data) {
    // setTimeout(()=>this.state.next(data),0)
    this.state = Object.assign({},this.state,data)
  }

  public getState() {
    return this.state
  }

  public clearState() {
    this.state = {}
  }

  public enableRefresh() {
    this.refresher.next(true)
  }

  public disableRefresh() {
    this.refresher.next(false)
  }

  public onRefresh(){
    return this.refresher.asObservable()
  }

}
