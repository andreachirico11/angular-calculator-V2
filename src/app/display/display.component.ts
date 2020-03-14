
import { Component, Input, OnInit } from '@angular/core';
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

}
