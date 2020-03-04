import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivaNGComponent } from './directiva-ng/directiva-ng.component';
import { HorarioComponent } from './horario/horario.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNGComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
