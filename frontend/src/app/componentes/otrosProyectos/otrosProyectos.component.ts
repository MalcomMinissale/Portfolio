import { Component, OnInit } from '@angular/core';
import { OtrosProyectos } from 'src/app/model/otros-proyectos';
import { ServOtrosProyectos } from 'src/app/service/otros-proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-otrosProyectos',
  templateUrl: './otrosProyectos.component.html',
  styleUrls: ['./otrosProyectos.component.css']
})
export class OtrosProyectoComponent implements OnInit {
  otrosProyectos: OtrosProyectos[] = [];

  constructor(private servOtrosProyectos: ServOtrosProyectos, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarOtrosProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarOtrosProyectos(): void{
    this.servOtrosProyectos.lista().subscribe(
      data =>{
        this.otrosProyectos = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.servOtrosProyectos.delete(id).subscribe(
        data => {
          this.cargarOtrosProyectos();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}





