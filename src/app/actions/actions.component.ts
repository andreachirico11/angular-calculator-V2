import { Component, Output ,EventEmitter} from '@angular/core';
import { actionsEnum, mathOpsEnum } from '../shared/enums';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styles: [' ']
})

export class ActionsComponent {
  @Output() signEvent = new EventEmitter<string>();
  @Output() actionEvent = new EventEmitter<string>();

  emitSign(sign : number) {
    switch (sign) {
      case 1:
      this.signEvent.emit(mathOpsEnum.addition);
        break;
      case 2:
      this.signEvent.emit(mathOpsEnum.subtraction);
        break;
      case 3:
      this.signEvent.emit(mathOpsEnum.multiplication);
        break;
      case 4:
      this.signEvent.emit(mathOpsEnum.division);
        break;
      default:
        break;
    }
  };

  emitAction(action: number) {
    switch (action) {
      case 1:
      this.actionEvent.emit(actionsEnum.Return);
        break;
      case 2:
      this.actionEvent.emit(actionsEnum.Back);
        break;
      case 3:
      this.actionEvent.emit(actionsEnum.Cancel);
        break;
      default:
        break;
    }
  }
}
