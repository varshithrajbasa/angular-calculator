
import { Component } from '@angular/core';

@Component({
  selector: 'my-calculator',
  standalone: true,
  templateUrl: './calculator.html',
  styleUrls: [ './calculator.css' ]
})
export class Calculator {
  name: string = "Calculator App";
  input1!:number;
  input2:number;
  result!:string;

  add(){
    this.result = this.input1+this.input2
  }
}

