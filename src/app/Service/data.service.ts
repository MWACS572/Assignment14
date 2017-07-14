/**
 * Created by Owner on 7/13/2017.
 */
import {Injectable, EventEmitter} from '@angular/core';
//import {LogService} from './log.service';

@Injectable()
export class DataService{
  constructor(){}

  private data= [{id:'1', name:'Phil Joe', stuID:'121212', email:'phill@yahoo.com'}, {id:'2', name:'Bill Will', stuID:'13232', email:'bill@yahoo.com'}];

  // addData(input:string){
  //   this.data.push(input);
  //   this.logService.logMe('Saved Item: '+input);
  // }

  getData(){
    return this.data;
  }
  // pushedData = new EventEmitter<string>();
  // pushData(value:string){
  //   this.pushedData.emit(value);
  // }

}
