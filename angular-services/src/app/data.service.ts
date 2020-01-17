import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: string[]=['Butter','Bread','Salt'];
  public getItems(): string[]{
    return this.items;
  }
  addItem(newItem){
    this.items.push(newItem);
    return this.items;
  }


  constructor() { }
}
