import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkills } from '../model/soft-skills';

@Injectable({
  providedIn: 'root'
})
export class ServSoftSkills {
  URL = 'http://localhost:8080/softskills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<SoftSkills[]>{
    return this.httpClient.get<SoftSkills[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<SoftSkills>{
    return this.httpClient.get<SoftSkills>(this.URL + `detail/${id}`);
  } 

  public save(softSkills: SoftSkills): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', SoftSkills);
  }

  public update(id: number, softSkills: SoftSkills): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, SoftSkills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
