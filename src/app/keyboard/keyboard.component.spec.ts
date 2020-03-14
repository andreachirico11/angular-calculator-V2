import { KeyboardComponent } from "./keyboard.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

describe('KEYBOARD-COMPONENT', () => {

  let keyboardComponent: KeyboardComponent;
  let keyboardFixture: ComponentFixture<KeyboardComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [KeyboardComponent]
    }).compileComponents().then(() => {
      keyboardFixture = TestBed.createComponent(KeyboardComponent);
      keyboardComponent = keyboardFixture.componentInstance;
    });
  }));

  it('emit the keyboard input', () => {
    const keyboardButtons = keyboardFixture.nativeElement.querySelector('td');
    spyOn(keyboardComponent.keyboardEvent, 'emit');
    keyboardButtons.click();
    expect(keyboardComponent.keyboardEvent.emit).toHaveBeenCalled();
  });
});
