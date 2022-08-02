import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string ='';
  descripcionExp: string ='';
  id: number;
  logoExp: string ='';


  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.id, this.nombreExp, this.descripcionExp, this.logoExp);
    this.sExperiencia.save(expe).subscribe(
        data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Hubo un error");
        this.router.navigate(['']);
      }
    
    )
  }
}
