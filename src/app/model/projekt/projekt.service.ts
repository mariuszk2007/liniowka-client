import { Projekt } from './Projekt';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProjektService {

  projektElement:string[];
  //urlApp = 'http://egsrv:8080/linear/';
  urlApp = 'http://localhost:8090/';
  constructor(private http: HttpClient) { }

  geProjekt(): Observable<Array<Projekt>> {
    return this.http.get<Array<Projekt>>(this.urlApp + 'projekt');
  }
  postProjekt(obj): Observable<Array<Projekt>> {
    const postUrl = this.urlApp+'projekt';
    return  this.http.post<Array<Projekt>>(postUrl, obj);
  }
  updateProjekt(obj): Observable<Array<Projekt>>{
    const putUrl = this.urlApp+'projekt';
    return this.http.put<Array<Projekt>>(putUrl, obj);
  }
}
