import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

// WILL CREATE A NUMBER FROM MANY INPUT

export class ComposeNumberService {

  composeNumber(newNum: number, prevNum: number,
     isNotPositive: boolean, decimalDivider?: number) {

      // threat negative case
      if(isNotPositive) {
        if(prevNum > 0) {
           return prevNum *= -1;
        } else {
          newNum *= -1;
        }
      }
      // threat comma
      if(decimalDivider) {
        newNum = newNum/decimalDivider;
        return prevNum + newNum;
      }
      // create and return number
      prevNum *= 10;
      return prevNum + newNum;
  }

}
