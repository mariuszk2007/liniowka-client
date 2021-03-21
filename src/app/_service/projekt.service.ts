import { Projekt } from '../model/projekt/Projekt';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { PathService } from 'src/app/_service/Path.service';

@Injectable({
  providedIn: 'root'
})
export class ProjektService {

  projektElement:string[];

  constructor(private http: HttpClient, private pathService: PathService) { }

  geProjekt(): Observable<Array<Projekt>> {
    return this.http.get<Array<Projekt>>(this.pathService.urlApp + 'projekt');
  }
  postProjekt(obj): Observable<Array<Projekt>> {
    const postUrl = this.pathService.urlApp+'projekt';
    return  this.http.post<Array<Projekt>>(postUrl, obj);
  }
  updateProjekt(obj): Observable<Array<Projekt>>{
    const putUrl = this.pathService.urlApp+'projekt';
    return this.http.put<Array<Projekt>>(putUrl, obj);
  }
}
