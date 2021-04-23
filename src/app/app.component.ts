import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Calculator';

  detect=true;
  num1;
  num2;
  opr;
  result=0;
  constructor() { }

  ngOnInit() {
  }

  public getNumber(v){
    if(this.detect===true){
      this.num1=v;
      this.result=v
      this.detect=false;
     
    }
    else if(this.detect===false){
      this.num2=v;
      this.result=v
      this.result= this.doCalculation(this.num1,this.num2,this.opr)
      
      this.detect=true;
      
      
    }

  }


    
    // if(this.waitForSecondNumber)
    // {
    //   this.currentNumber = v;
    //   this.waitForSecondNumber = false;
      
      
    // }else{
    //   this.currentNumber === 0? this.currentNumber = v: this.currentNumber += v;
    //   console.log(this.currentNumber);

    // }
  

 

  private doCalculation(number1, number2, opp){
    switch (opp){
      case '+':
      return parseFloat(number1)+ parseFloat(number2);
      case '-': 
      return parseFloat(number1)-parseFloat(number2); 
      case '*': 
      return parseFloat(number1)*parseFloat(number2);
      case '/': 
      return parseFloat(number1)/parseFloat(number2);
     
    }
  }
  public getOperation(op){

    this.opr=op;
    console.log(this.opr)



 
  }

  public clear(){
    this.num1 = 0;
    this.num2 = 0;
    this.opr = null;
    this.result=0;
    
  }
}

