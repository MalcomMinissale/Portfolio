import { Component, OnInit } from '@angular/core';
import { ServSoftSkills } from 'src/app/service/soft-skills.service';
import { TokenService } from 'src/app/service/token.service';
import { SoftSkills } from 'src/app/model/soft-skills';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  softSkills: SoftSkills[] = [];

  constructor(private servSoftSkills: ServSoftSkills, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSoftSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSoftSkill(): void {
    this.servSoftSkills.lista().subscribe(data => { this.softSkills = data; })
  }

    delete(id?: number){
      this.servSoftSkills.delete(id).subscribe(
        data => {
          this.cargarSoftSkill();
        }, err => {
          alert("No se pudo borrar");
        }
      )
      }
  }

