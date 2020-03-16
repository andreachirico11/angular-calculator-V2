
import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html'
})


export class DisplayComponent {

  backspaceIcon = faBackspace;
  @Input() mainNumber: number;
  @Input() result: number;
  @Input() chosenSign: string;
  @Output() cancel = new EventEmitter<boolean>();

  erase() {
    this.cancel.emit(true);
  }

}
