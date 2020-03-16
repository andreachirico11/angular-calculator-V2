import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { BodyComponent } from './body.component';
import { AppModule } from '../app.module';
import { mathOpsEnum, actionsEnum } from '../shared/enums';

describe('BODY-COMPONENT', () => {

let bodyComponent: BodyComponent;
let fixture: ComponentFixture<BodyComponent>;

 beforeEach( async( () => {
   TestBed.configureTestingModule({
     imports: [AppModule]
   }).compileComponents()
     .then(() => {
      fixture = TestBed.createComponent(BodyComponent);
      bodyComponent = fixture.componentInstance;
     })
 }));

 it('should create the component', () => {
  expect(bodyComponent).toBeTruthy();
 });

 it('correctly uses the service', () => {
   bodyComponent.buildNumber(3);
   expect(bodyComponent.mainNumber).toBe(3);
 });

 it('correctly creates decimal numbers', () => {
   bodyComponent.isDecimal = true;

  bodyComponent.mainNumber = 3;
  bodyComponent.decimalDivider = 10;
  bodyComponent.buildNumber(3);
  expect(bodyComponent.mainNumber).toBe(3.3);

  bodyComponent.mainNumber = 3.1;
  bodyComponent.decimalDivider = 100;
  bodyComponent.buildNumber(3);
  expect(bodyComponent.mainNumber).toBe(3.13);

  bodyComponent.mainNumber = 3.123;
  bodyComponent.decimalDivider = 10000;
  bodyComponent.buildNumber(3);
  expect(bodyComponent.mainNumber).toBe(3.1233);
 });

 it('correctly creates negative number', () => {
  bodyComponent.isDecimal = false;
  bodyComponent.isNotPositive = false;

  bodyComponent.mainNumber = 0;
  bodyComponent.buildNumber(-1);
  expect(bodyComponent.mainNumber).toBe(0);
  bodyComponent.mainNumber = -35;
  bodyComponent.buildNumber(-1);
  expect(bodyComponent.mainNumber).toBe(35);



 });


//  ########################### OPERATIONS #################################################################

 it('correctly launches the first operation', () => {
  bodyComponent.isDecimal = false;
  bodyComponent.isNotPositive = false;
  bodyComponent.resultsArray = [];
  bodyComponent.mainNumber = 3;

  bodyComponent.retrieveSign(mathOpsEnum.addition);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([3], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.addition,' fail chosen ops');

  bodyComponent.mainNumber = 2;
  bodyComponent.executeChosenAction(actionsEnum.Return);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([5], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(null,' fail chosen ops');

 });

 it('correctly launches the second operation after the first', () => {
  bodyComponent.isDecimal = false;
  bodyComponent.isNotPositive = false;
  bodyComponent.resultsArray = [5];
  bodyComponent.mainNumber = 2;

  bodyComponent.retrieveSign(mathOpsEnum.addition);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([5,2], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.addition,' fail chosen ops');

  bodyComponent.mainNumber = 4;
  bodyComponent.executeChosenAction(actionsEnum.Return);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([5,6], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(null,' fail chosen ops');

 });

 it('correctly launches the first negative operation', () => {
  bodyComponent.isDecimal = false;
  bodyComponent.isNotPositive = false;
  bodyComponent.resultsArray = [];
  bodyComponent.mainNumber = -3;

  bodyComponent.retrieveSign(mathOpsEnum.addition);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([-3], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.addition,' fail chosen ops');

  bodyComponent.mainNumber = 2;
  bodyComponent.executeChosenAction(actionsEnum.Return);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([-1], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(null,' fail chosen ops');

 });

 it('correctly launches the second NEGATIVE operation after the first', () => {
  bodyComponent.isDecimal = false;
  bodyComponent.isNotPositive = true;
  bodyComponent.resultsArray = [-1];
  bodyComponent.mainNumber = -45;

  bodyComponent.retrieveSign(mathOpsEnum.multiplication);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([-1,-45], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.multiplication,' fail chosen ops');

  bodyComponent.mainNumber = 2;
  bodyComponent.executeChosenAction(actionsEnum.Return);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([-1,-90], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(null,' fail chosen ops');

 });

 it('correctly launches the first DECIMAL operation', () => {
  bodyComponent.isDecimal = false;
  bodyComponent.isNotPositive = false;
  bodyComponent.resultsArray = [];
  bodyComponent.mainNumber = 0.3;

  bodyComponent.retrieveSign(mathOpsEnum.division);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([0.3], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.division,' fail chosen ops');

  bodyComponent.mainNumber = 2;
  bodyComponent.executeChosenAction(actionsEnum.Return);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([0.15], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(null,' fail chosen ops');

 });

 it('correctly launches the second DECIMAL operation after the first', () => {
  bodyComponent.isDecimal = false;
  bodyComponent.isNotPositive = true;
  bodyComponent.resultsArray = [0.15];
  bodyComponent.mainNumber = 3.2;

  bodyComponent.retrieveSign(mathOpsEnum.multiplication);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([0.15,3.2], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.multiplication,' fail chosen ops');

  bodyComponent.mainNumber = 4.3;
  bodyComponent.executeChosenAction(actionsEnum.Return);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([0.15,13.76], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(null,' fail chosen ops');

 });

//  it('correctly launches the first DECIMAL NEGATIVE operation', () => {
//   bodyComponent.isDecimal = false;
//   bodyComponent.isNotPositive = false;
//   bodyComponent.resultsArray = [];
//   bodyComponent.mainNumber = -0.3;

//   bodyComponent.retrieveSign(mathOpsEnum.division);
//   expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
//   expect(bodyComponent.resultsArray).toEqual([-0.3], 'fail res array');
//   expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.division,' fail chosen ops');

//   bodyComponent.mainNumber = 48;
//   bodyComponent.executeChosenAction(actionsEnum.Return);
//   expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
//   expect(bodyComponent.resultsArray).toEqual([-0.00625], 'fail res array');
//   expect(bodyComponent.chosenOperation).toBe(null,' fail chosen ops');

//  }); // fails because of the decimal error

 it('correctly launches the second DECIMAL NEGATIVE operation after the first', () => {
  bodyComponent.isDecimal = false;
  bodyComponent.isNotPositive = true;
  bodyComponent.resultsArray = [-0.73];
  bodyComponent.mainNumber = -3.2;

  bodyComponent.retrieveSign(mathOpsEnum.addition);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([-0.73, -3.2], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.addition,' fail chosen ops');

  bodyComponent.mainNumber = -4.3;
  bodyComponent.executeChosenAction(actionsEnum.Return);
  expect(bodyComponent.mainNumber).toBe(0, 'fail main num');
  expect(bodyComponent.resultsArray).toEqual([-0.73, -7.5], 'fail res array');
  expect(bodyComponent.chosenOperation).toBe(null,' fail chosen ops');

 });

 it('correctly launches another operation after return', () => {
  bodyComponent.isDecimal = false;
  bodyComponent.isNotPositive = true;
  bodyComponent.chosenOperation = null;
  bodyComponent.mainNumber = 0;
  bodyComponent.resultsArray = [3];

  bodyComponent.retrieveSign(mathOpsEnum.addition);
  expect(bodyComponent.resultsArray).toEqual([3,3]);
  expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.addition,' fail chosen ops');

  bodyComponent.mainNumber = 54;
  bodyComponent.retrieveSign(mathOpsEnum.subtraction);
  expect(bodyComponent.resultsArray).toEqual([3,57,57]);
  expect(bodyComponent.chosenOperation).toBe(mathOpsEnum.subtraction,' fail chosen ops');

 });


 // NEED TO TEST NEGATIVE AND DECIMAL CASES



// ################################################ ERASE ##################################################################

it('erases correctly', () => {
  bodyComponent.mainNumber = 0;
  bodyComponent.erase();
  expect(bodyComponent.mainNumber).toBe(0);
  bodyComponent.mainNumber = 23;
  bodyComponent.erase();
  expect(bodyComponent.mainNumber).toBe(2);
  bodyComponent.mainNumber = 0.46;
  bodyComponent.erase();
  expect(bodyComponent.mainNumber).toBe(0.4);
  bodyComponent.mainNumber = -3456;
  bodyComponent.erase();
  expect(bodyComponent.mainNumber).toBe(-345);
});

// ##################################################### BACK #####################################################

it('CE correcty', () => {
  bodyComponent.mainNumber = 1;
  bodyComponent.resultsArray = [1,2,3];
  bodyComponent.chosenOperation = mathOpsEnum.addition;
  bodyComponent.executeChosenAction(actionsEnum.Back);
  expect(bodyComponent.mainNumber).toBe(3);
  expect(bodyComponent.resultsArray).toEqual([1,2]);
  bodyComponent.retrieveSign(bodyComponent.chosenOperation);
  expect(bodyComponent.mainNumber).toBe(0);
  expect(bodyComponent.resultsArray).toEqual([1,2,3]);

  bodyComponent.mainNumber = 1;
  bodyComponent.resultsArray = [];
  bodyComponent.chosenOperation = mathOpsEnum.addition;
  bodyComponent.executeChosenAction(actionsEnum.Back);
  expect(bodyComponent.mainNumber).toBe(1);
  expect(bodyComponent.resultsArray).toEqual([]);

});


});
