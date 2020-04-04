import { Component, OnInit } from '@angular/core';
import { RepasoService } from './../repaso.service';

@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styleUrls: ['./repaso.component.css']
})
export class RepasoComponent implements OnInit {

  cambio:string;
  info:any[] = [];
  
  constructor(private repasar:RepasoService) {
      this.info = repasar.GetInfo();
  }

  ngOnInit(): void {
  }

}
