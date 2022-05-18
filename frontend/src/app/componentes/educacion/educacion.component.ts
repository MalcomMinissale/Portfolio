import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/servicios/mi-portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:any;
  constructor(private miServicio:MiPortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosEducacion().subscribe(data =>{
      console.log(data);
      this.educacion=data["education"];
    });
  }

}
