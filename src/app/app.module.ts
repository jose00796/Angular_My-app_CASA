import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Servicios

import { EquipoService } from './equipo.service';
import { RepasoService } from './repaso.service';
import { FutbolService } from './futbol.service';

//Componentes
import { AppComponent } from './app.component';
import { DirectivaNGComponent } from './directiva-ng/directiva-ng.component';
import { HorarioComponent } from './horario/horario.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';
import { RepasoComponent } from './repaso/repaso.component';
import { FutbolComponent } from './futbol/futbol.component';

const routes: Routes = [
  { path: 'horario', component: HorarioComponent },
  { path: 'lista', component: DirectivaNGComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'repaso', component: RepasoComponent },
  { path: 'futbol', component: FutbolComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNGComponent,
    HorarioComponent,
    CabeceraComponent,
    FooterComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent,
    RepasoComponent,
    FutbolComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService,
    RepasoService,
    FutbolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
