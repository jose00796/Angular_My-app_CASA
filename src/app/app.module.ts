import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DirectivaNGComponent } from './directiva-ng/directiva-ng.component';
import { HorarioComponent } from './horario/horario.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'horario', component: HorarioComponent },
  { path: 'directiva', component: DirectivaNGComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNGComponent,
    HorarioComponent,
    CabeceraComponent,
    FooterComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
