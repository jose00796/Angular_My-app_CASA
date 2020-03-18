import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  show:boolean = true;
  materia:string = 'programacion';
  calc:number = 0;
  activo:string;

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
