import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-gotname',
  templateUrl: './gotname.component.html',
  styleUrls: ['./gotname.component.css']
})
export class GOTNameComponent implements OnInit {

  GOTName:string[];
  GOTFruitName:string[] = ['Apple','Orange','Grapes','Pomegrenate'];
  GOTVegetableName:string[]=['broccoli','tomato','pumpkin','beetroot'];
  i=0;
  stopSwtich:any;

  switchFruitAndVegetableName(){
    setInterval(()=>{
      if (this.i%2==0) {
        this.GOTName = this.GOTFruitName;
        console.log('if');
      }
      else
      {
        this.GOTName = this.GOTVegetableName;
        console.log('else');
      }
      this.i++;
    },2000);
    
  }
  stopFruitAndVegetableName(){
    setInterval(this.stopSwtich);
  }

  constructor() { 
    this.GOTName = this.GOTFruitName;
  }

  ngOnInit() {
  }

}
