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
