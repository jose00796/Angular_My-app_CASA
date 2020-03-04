import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng',
  templateUrl: './directiva-ng.component.html',
  styleUrls: ['./directiva-ng.component.css']
})
export class DirectivaNGComponent implements OnInit {

  show:boolean = true;
  materia:string = 'programacion';
  calc:number = 0;
  activo:string;

  MisGustos:string[] = ['Mujeres', 'Dulces', 'Cafe', 'Futbol', 'Anime', 'Musica'];

  personas:Array<any> = [
    {nombre:'Jose', apellido:'Machado', cedula:25418204, edo_civil:'Soltero'},
    {nombre:'Migdaly', apellido:'Tarazona', cedula:27420310, edo_civil:'Soltero'},
    {nombre:'Franmy', apellido:'Tarazona', cedula:27420309, edo_civil:'Soltero'},
    {nombre:'Pedro', apellido:'Rosal', cedula:25890567, edo_civil:'Soltero'},
    {nombre:'Esmeralda', apellido:'Fuentes', cedula:6102995, edo_civil:'Casado'},
  ];


  EsMuyListo()
  {
    if(this.calc > 9 && this.materia == 'programacion'){
        return true;
    }else{
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
