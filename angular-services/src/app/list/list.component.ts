import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[DataService] // will provide instance of class
})
export class ListComponent implements OnInit {

  itemsRecieved: string[]=[''];
  getItemsFromServiceClass(){
    this.itemsRecieved = this.dataService.getItems();
    console.log( "constructorVal: "+this.itemsRecieved);
  }

  addNewItem(form:any)
  {
    this.dataService.addItem(form.value.itemName);
    console.log(form.value.itemName);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
