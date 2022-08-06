import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OtrosProyectos } from '../model/otros-proyectos';

@Injectable({
  providedIn: 'root'
})
export class ServOtrosProyectos {
  URL = 'http://localhost:8080/otros-proyectos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<OtrosProyectos[]>{
    return this.httpClient.get<OtrosProyectos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<OtrosProyectos>{
    return this.httpClient.get<OtrosProyectos>(this.URL + `detail/${id}`);
  } 

  public save(otrosProyectos: OtrosProyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', OtrosProyectos);
  }

  public update(id: number, otrosProyectos: OtrosProyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, OtrosProyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
