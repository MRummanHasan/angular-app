import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  dcHeroes:string[]=['Batman','Superman','Wonder Woman','Flash'];
  index:number=0;

  toggleHeroFlag:boolean=true;
  toggleHero(){
    this.toggleHeroFlag=!this.toggleHeroFlag;
  }
  selectedHero:string;
  selectHero(hero)
  {
    this.selectedHero=hero;
    console.log(hero);
  }

  //ngStyle
  myStyle:{};
  color:string;
  styleToggleFlag:boolean=true;
  setStyle(){
    this.myStyle={
      'font-weight': this.styleToggleFlag ? 'bold' : 'normal',
      'font-size': this.styleToggleFlag ? '24px' : '15px',
      'color': this.generateRandomColor()
    }
      this.styleToggleFlag = !this.styleToggleFlag;
  }
  generateRandomColor(){
    this.color = "#";
    var letter = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(var i=0;i<6;i++)
    {
      this.color += letter[Math.floor(Math.random()*16)];
    }
    console.log(this.color);

    return this.color;
  }

  //ngClass
  currentCSSClass:string='styleRed';
  setCSSClass(){
    if (this.currentCSSClass == 'styleWhite') {
      this.currentCSSClass = 'styleRed';
    } else {
      this.currentCSSClass = 'styleWhite';
    }
    
console.log(this.currentCSSClass);
  }




  constructor() { }

  ngOnInit() {
  }

}
