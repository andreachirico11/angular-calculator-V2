import { ComposeNumberService } from "./composeNumber.service"
import { TestBed } from '@angular/core/testing';

describe('COMPOSE-NUMBER-SERVICE', () => {

  let service: ComposeNumberService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComposeNumberService]
    })
    service = TestBed.get(ComposeNumberService);
  });

  it('should create a positive number', () => {
    let prevNum;
    let newNum;
    let isnotPositive = false;
    let decimalMultiplier;
    let result;

    prevNum = 1;
    newNum = 1;
    result = service.composeNumber(newNum, prevNum, isnotPositive);
    expect(result).toBe(11);
    prevNum = 1;
    newNum = 3;
    result = service.composeNumber(newNum, prevNum, isnotPositive);
    expect(result).toBe(13);
    prevNum = 9;
    newNum = 9;
    result = service.composeNumber(newNum, prevNum, isnotPositive);
    expect(result).toBe(99);
  });

  it('should create a negative number', () => {
    let prevNum;
    let newNum;
    let isnotPositive = true;
    let result;

    prevNum = 0;
    newNum = 253;
    result = service.composeNumber(newNum, prevNum, isnotPositive);
    expect(result).toBe(-253);
    prevNum = -1;
    newNum = 3;
    result = service.composeNumber(newNum, prevNum, isnotPositive);
    expect(result).toBe(-13);
    prevNum = 0;
    newNum = 0;
    result = service.composeNumber(newNum, prevNum, isnotPositive);
    expect(result).toBe(0);
  });

  it('should create a decimal number', () => {
    let prevNum;
    let newNum;
    let isnotPositive = false;
    let decimalDivider;
    let result;

    prevNum = 0;
    newNum = 3;
    decimalDivider = 10;
    result = service.composeNumber(newNum, prevNum, isnotPositive, decimalDivider);
    expect(result).toBe(0.3);
    prevNum = 312.45;
    newNum = 4;
    decimalDivider = 1000;
    result = service.composeNumber(newNum, prevNum, isnotPositive, decimalDivider);
    expect(result).toBe(312.454);
  });

  it('should create a decimal negative number', () => {
    let prevNum;
    let newNum;
    let isnotPositive = true;
    let decimalDivider;
    let result;

    prevNum = 0;
    newNum = 3;
    decimalDivider = 10;
    result = service.composeNumber(newNum, prevNum, isnotPositive, decimalDivider);
    expect(result).toBe(-0.3);
    prevNum = 243;
    newNum = 3;
    decimalDivider = 10;
    result = service.composeNumber(newNum, prevNum, isnotPositive, decimalDivider);
    expect(result).toBe(-243);
    prevNum = -243;
    newNum = 3;
    decimalDivider = 10;
    result = service.composeNumber(newNum, prevNum, isnotPositive, decimalDivider);
    expect(result).toBe(-243.3);
  })

});
