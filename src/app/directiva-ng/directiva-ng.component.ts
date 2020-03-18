import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng',
  templateUrl: './directiva-ng.component.html',
  styleUrls: ['./directiva-ng.component.css']
})
export class DirectivaNGComponent implements OnInit {

  MisGustos:string[] = ['Mujeres', 'Dulces', 'Perros', 'Cafe', 'Futbol', 'Anime', 'Musica'];
  Perras:string[] = ['Daniela', 'Dannesa', 'Ibelise'];

  personas:Array<any> = [
    {nombre:'Jose', apellido:'Machado', cedula:25418204, edo_civil:'Soltero'},
    {nombre:'Migdaly', apellido:'Tarazona', cedula:27420310, edo_civil:'Soltero'},
    {nombre:'Franmy', apellido:'Tarazona', cedula:27420309, edo_civil:'Soltero'},
    {nombre:'Pedro', apellido:'Rosal', cedula:25890567, edo_civil:'Soltero'},
    {nombre:'Esmeralda', apellido:'Fuentes', cedula:6102995, edo_civil:'Casado'},
    {nombre:'Luis', apellido:'Fuentes', cedula:27365237, edo_civil:'Soltero'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
