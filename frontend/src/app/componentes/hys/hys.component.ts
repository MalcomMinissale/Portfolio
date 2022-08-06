import { Component, OnInit } from '@angular/core';
import { ServHardSkills } from 'src/app/service/hard-skills.service';
import { TokenService } from 'src/app/service/token.service';
import { HardSkills } from 'src/app/model/hard-skills';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  hardSkills: HardSkills[] = [];

  constructor(private servHardSkills: ServHardSkills, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHardSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHardSkill(): void {
    this.servHardSkills.lista().subscribe(data => { this.hardSkills = data; })
  }

    delete(id?: number){
      this.servHardSkills.delete(id).subscribe(
        data => {
          this.cargarHardSkill();
        }, err => {
          alert("No se pudo borrar");
        }
      )
      }
  }

