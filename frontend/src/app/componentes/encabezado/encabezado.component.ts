import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/servicios/mi-portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona:any;
  constructor(private miServicio:MiPortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.persona=data["persona"];
    })
  }

}
