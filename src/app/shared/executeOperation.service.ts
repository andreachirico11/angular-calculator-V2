import { Injectable } from '@angular/core';
import { mathOpsEnum } from'./enums';

@Injectable({providedIn: 'root'})

export class ExecuteOperationService {
  executeChosenOps( mainNumber: number, previousNumber: number, operation: string ) {
    switch (operation) {
      case mathOpsEnum.addition:
      return mainNumber + previousNumber;
      case mathOpsEnum.subtraction:
      return previousNumber - mainNumber;
      case mathOpsEnum.multiplication:
      return previousNumber * mainNumber;
      case mathOpsEnum.division:
      return previousNumber / mainNumber;
      default:
        break;
    }
  }
}
