import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { from } from 'rxjs';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  userList: User[]=[];
  
  addUser(form){
    var user: User;
    user=form.value;
    this.userList.push(user);
    console.log(form.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
