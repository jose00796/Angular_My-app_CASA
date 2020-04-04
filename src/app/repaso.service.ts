import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepasoService {

  info:any[] = [
    
    {Nombre:'Jose', Equipo:'Manchester_United', Debilidad:'Mujeres', Carrera:'Informatica'},
    {Nombre:'Eiker', Equipo:'Real_Madrid', Debilidad:'LOL', Carrera:'Es un Vago'},
    {Nombre:'Pedro', Equipo:'Chelsea', Debilidad:'Calvicie', Carrera:'Vender'},
    {Nombre:'David', Equipo:'Manchester_City', Debilidad:'Mi_Guevo', Carrera:'Ingenieria_Sistemas'},
    {Nombre:'Victor', Equipo:'Barcelona', Debilidad:'Futbol', Carrera:'Administracion'},
  ];

  constructor() { 
    console.log('Servicio de REPASO Funcionando Guapo...');
  }

  GetInfo() {
    return this.info;
  }
}
