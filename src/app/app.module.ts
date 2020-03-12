import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DisplayComponent } from './display/display.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    KeyboardComponent,
    DisplayComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
