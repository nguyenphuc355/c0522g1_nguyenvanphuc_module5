import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(calculate: string): string {
    switch (calculate) {
      case "+":
        this.result = Number(this.firstNumber) + Number(this.secondNumber);
        break;
      case "-":
        this.result = Number(this.firstNumber) - Number(this.secondNumber);
        break;
      case "*":
        this.result = Number(this.firstNumber) * Number(this.secondNumber);
        break;
      case "/":
        if (this.secondNumber == 0){
          return  this.result ='Không chia được cho 0';
        }
        this.result = Number(this.firstNumber) / Number(this.secondNumber);
        break;

    }
  }
}
