import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styles: [' .table td { width: 30% }']
})

export class KeyboardComponent {

  @Output() keyboardEvent = new EventEmitter<number>();

  emitKey(num: number) {
    this.keyboardEvent.emit(num);
  }

}
