import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Migdaly es Preciosa';
  show:boolean = true;
  materia:string = 'programacion';
  calc:number = 0;

  EsMuyListo()
  {
    if(this.calc > 9 && this.materia == 'programacion'){
        return true;
    }else{
      return false;
    }
  }
}
