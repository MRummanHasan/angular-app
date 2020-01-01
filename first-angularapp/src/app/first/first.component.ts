import { Component } from '@angular/core';

@Component({
    selector:"app-first",
    templateUrl:'first.component.html',
    styleUrls:['first.component.css']
})
export class FirstComponent{
    // Interpolation
    headingTwo:string='I love interpolation';
    returnHeading() {
        return ' i am func of Heading';
    }
    //Property Binding
    imageUrl:string='../assets/angular-4.png';
    //event binding
    changeValue(){
        this.headingTwo = 'This is a event binding example';
    }
}