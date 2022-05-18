import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class MiPortfolioService {

  constructor(private http:HttpClient) { 
    console.log("El servicio está corriendo");
  }

  obtenerDatosPersona():Observable<any>{
   return this.http.get('./assets/data/persona.json');
  }

  obtenerDatosEducacion():Observable<any>{
    return this.http.get('./assets/data/educacion.json');
    }

  editarDatosPersona(persona:Persona):Observable<any>{
    return this.http.post('http://localhost:3000/posts',persona)
  }
   }