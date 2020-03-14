import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { ActionsComponent } from './actions.component';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';

describe('ACTIONS-COMPONENT', () => {

  let actionsFixture: ComponentFixture<ActionsComponent>;
  let actionComponent: ActionsComponent;

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [ActionsComponent],
      imports: [AppModule]
    });
    actionsFixture = TestBed.createComponent(ActionsComponent);
    actionComponent = actionsFixture.componentInstance;
  }));

  it('should send a return action', () => {
    let returnButton = actionsFixture.debugElement.query(By.css('.list-group-item')).nativeElement;
    spyOn(actionComponent.actionEvent, 'emit');
    returnButton.click();
    expect(actionComponent.actionEvent.emit).toHaveBeenCalled();
  });
});
