import { Component, OnInit, Input } from '@angular/core';
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
  stopSwitchStatus=true;
  twoWayData='Tyrion';

  @Input() imageUrlChild:string;
  

  stopFruitAndVegetableName(){
    clearInterval(this.stopSwtich);
  }

  switchFruitAndVegetableName(){
    this.stopSwtich=setInterval(()=>{
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
    this.stopSwitchStatus=false;
  }



  constructor() { 
    this.GOTName = this.GOTFruitName;
  }

  ngOnInit() {
    console.log(this.imageUrlChild);
  }

}
