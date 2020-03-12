import { Component } from '@angular/core';
import { ComposeNumberService } from '../shared/composeNumber.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: ['li {cursor: pointer} li:hover {border: 1px solid black}']
})

export class BodyComponent {

  mainNumber: number = 0;
  resultsArray: number[] = [];
  isNotPositive: boolean;
  isDecimal = false;
  decimalDivider = 1;

  constructor(private composeNumberService: ComposeNumberService) {}

  buildNumber(keyPressed: number) {
    if(keyPressed === -1) {
      this.isNotPositive = true;
    }
    if(keyPressed === 0.1) {
      this.isDecimal = true;
    }
    if(this.isDecimal === true) {
      this.mainNumber = this.composeNumberService.composeNumber(
        keyPressed, this.mainNumber, this.isNotPositive, this.decimalDivider
      );
      this.decimalDivider *= 10;
      } else {
      this.mainNumber = this.composeNumberService.composeNumber(
        keyPressed, this.mainNumber, this.isNotPositive
      );
    }
    console.log(this.mainNumber);
  }

}
