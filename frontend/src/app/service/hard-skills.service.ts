import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkills } from '../model/hard-skills';

@Injectable({
  providedIn: 'root'
})
export class ServHardSkills {
  URL = 'http://localhost:8080/hardskills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HardSkills[]>{
    return this.httpClient.get<HardSkills[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<HardSkills>{
    return this.httpClient.get<HardSkills>(this.URL + `detail/${id}`);
  } 

  public save(hardSkills: HardSkills): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', HardSkills);
  }

  public update(id: number, hardSkills: HardSkills): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, HardSkills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
