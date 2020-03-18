import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Jose',
      especialidad: 'Buena Persona',
      descripcion: 'Futuro Director Ejecutivo del CNE, Novio de Migdaly :) y Ganador Legal de la Bota de Oro 2019-2020(y al que no le guste que se joda)'
    },

    {
      nombre: 'David',
      especialidad: 'Cagarla/Super Cagarla/Mega Cagarla',
      descripcion: 'Saca Culo de primera y experto en mamarme el Guevo y cagarla jugando el ridiculo Ajedrez'
    },

    {
      nombre: 'Victor',
      especialidad: 'Hacer Trampa en Mario Party',
      descripcion: 'Tiene Dolares bien caleta y no comparte con uno el malparido ese NOJODA, y elige equipos de mierda como la chusma del City'
    },

    {
      nombre: 'Pedro',
      especialidad: 'Ilusionar a la Gente con Pizza y no Pagarla nunca',
      descripcion: 'Capitan Supremo Intergalactico y es un pobre iluso que piensa que juega mas que yo y que el Chelsea vale la pena'
    }
  ];

  constructor() {
    console.log('Servicio Funcionando Guapo');
   }

   ObtenerEquipo(){
      return this.equipo;
   }
}
