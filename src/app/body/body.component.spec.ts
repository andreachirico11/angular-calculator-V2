import { TestBed } from "@angular/core/testing";
import { ComposeNumberService } from '../shared/composeNumber.service';
import { BodyComponent } from './body.component';

describe('BODY-COMPONENT', () => {

  let dummyService = function(newNum, previousNum, isNotPositive, decimalDivider) {
    return newNum +'|'+previousNum+'|'+isNotPositive+'|'+decimalDivider};

  beforeEach(()=> {
    TestBed.configureTestingModule({
      providers: [{provide: ComposeNumberService, useValue: dummyService}],
      declarations: [BodyComponent]
    });
  });

  it('should create the component', () => {
    let fixture = TestBed.createComponent(BodyComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  // it('should inject properly the service', () => {
  //   let fixture = TestBed.createComponent(BodyComponent);
  //   let component = fixture.debugElement.componentInstance;
  //   let service = fixture.debugElement.injector.get(ComposeNumberService);
  //     })

  // it('should send correct info', () => {
  //   let bodyComponent = new BodyComponent();
  //   bodyComponent.mainNumber = 3;
  //   bodyComponent.isDecimal = false;
  //   bodyComponent.isNotPositive = false;
  //   let result = bodyComponent.buildNumber(1);
  //   expect(bodyComponent.mainNumber).toBe();
  // })

});
