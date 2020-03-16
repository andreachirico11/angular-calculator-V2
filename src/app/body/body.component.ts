import { Component } from "@angular/core";
import { ComposeNumberService } from "../shared/composeNumber.service";
import { actionsEnum } from '../shared/enums';
import { ExecuteOperationService } from '../shared/executeOperation.service';


@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styles: ["li {cursor: pointer} li:hover {border: 1px solid black}"]
})
export class BodyComponent {
  mainNumber: number = 0;
  resultsArray: number[] = [];
  isNotPositive: boolean;
  isDecimal = false;
  decimalDivider = 10;
  chosenOperation: string = null;

  constructor(private composeNumberService: ComposeNumberService,
              private executeOperationService: ExecuteOperationService) {}

  buildNumber(keyPressed: number) {
    if (keyPressed === -1) {
      this.isNotPositive = true;
      keyPressed = 0;
    }
    if (keyPressed === 0.1) {
      this.isDecimal = true;
      return;
    }
    if (this.isDecimal === true) {
      this.mainNumber = this.composeNumberService.composeNumber(
        keyPressed,
        this.mainNumber,
        this.isNotPositive,
        this.decimalDivider
      );
      this.decimalDivider *= 10;
    } else {
      this.mainNumber = this.composeNumberService.composeNumber(
        keyPressed,
        this.mainNumber,
        this.isNotPositive
      );
    }
  }

  erase() {
    this.mainNumber = this.composeNumberService.eraseNumber(this.mainNumber);
  }

  retrieveSign(sign: string) {
    this.isNotPositive = false;
    this.isDecimal = false;

    if (this.chosenOperation === null && this.mainNumber === 0) {
      const temp = this.resultsArray[(this.resultsArray.length)-1];
      this.resultsArray.push(temp);
      this.chosenOperation = sign;
    }  else if (this.chosenOperation !== null && this.mainNumber > 0) {
      this.executeChosenAction(actionsEnum.Return);
      const temp = this.resultsArray[(this.resultsArray.length)-1];
      this.resultsArray.push(temp);
      this.chosenOperation = sign;
    } else {
      this.chosenOperation = sign;
      this.resultsArray.push(this.mainNumber);
      this.mainNumber = 0;
    }

  }

  executeChosenAction(action: string) {
    switch (action) {

      case actionsEnum.Return:
        const prevNum = this.resultsArray[(this.resultsArray.length)-1];
        let res = this.executeOperationService.executeChosenOps(
          this.mainNumber, prevNum, this.chosenOperation);
        this.mainNumber = 0;
        this.resultsArray[(this.resultsArray.length)-1] = res;
        this.chosenOperation = null;
        this.isDecimal = false;
        this.isNotPositive = false;
        break;

      case actionsEnum.Back:
        if(this.resultsArray.length === 0) {
          break;
        }
        this.mainNumber = this.resultsArray[(this.resultsArray.length)-1];
        this.resultsArray.pop();
        this.chosenOperation = null;
        this.isDecimal = false;
        this.isNotPositive = false;
        break;

      case actionsEnum.Cancel:
        this.isNotPositive = false;
        this.isDecimal = false;
        this.resultsArray = [];
        this.mainNumber = 0;
        this.chosenOperation = null;
      default:
        break;
    }
  }
}
