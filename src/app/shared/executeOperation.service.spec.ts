import { ExecuteOperationService } from "./executeOperation.service";
import { TestBed } from '@angular/core/testing';
import { mathOpsEnum } from './enums';

describe('OPERATION-SERVICE', () => {

  let operationService: ExecuteOperationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExecuteOperationService]
    });
    operationService = TestBed.get(ExecuteOperationService);
  });

  it('should execute operations', () => {
    let mainNumber = 4;
    let previousNumber = 5;
    let operation;

    operation = mathOpsEnum.addition;
    expect(mainNumber + previousNumber).toBe(operationService.executeChosenOps(mainNumber,previousNumber,operation));
    operation = mathOpsEnum.subtraction;
    expect(previousNumber - mainNumber).toBe(operationService.executeChosenOps(mainNumber,previousNumber,operation));
    operation = mathOpsEnum.multiplication;
    expect(mainNumber * previousNumber).toBe(operationService.executeChosenOps(mainNumber,previousNumber,operation));
    operation = mathOpsEnum.division;
    expect(previousNumber / mainNumber).toBe(operationService.executeChosenOps(mainNumber,previousNumber,operation));
  })

});
