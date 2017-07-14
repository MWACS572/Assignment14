/**
 * Created by Owner on 7/13/2017.
 */

import {Component} from "@angular/core";
//import {LogService} from "./Service/log.service";
import {DataService} from "./Service/data.service";

@Component({
  selector: 'app-Students',
  templateUrl: './students.component.html',
  styles:[]
})

export class StudentsComponent{
  value="";
  items;

    constructor(private dataService:DataService){

    }
  onGetStudents(){
    this.items = this.dataService.getData();
  }
  getDetail(id){
    console.log(id);
  }
}
