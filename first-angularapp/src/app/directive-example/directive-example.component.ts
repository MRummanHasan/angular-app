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

  constructor() { }

  ngOnInit() {
  }

}
