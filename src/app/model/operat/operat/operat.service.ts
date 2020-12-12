import { Injectable } from '@angular/core';
import { Operat } from './Operat';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Projekt } from '../../projekt/Projekt';

@Injectable({
  providedIn: 'root'
})
export class OperatService {

  operatElement:Array<Operat>;

//urlApp = 'http://egsrv:8080/linear/';
urlApp = 'http://localhost:8090/';

  constructor(private http: HttpClient) {}

    getOperat(projektId:string): Observable<Array<Operat>> {
      let params = new HttpParams();
      params = params.append('projektId', projektId);
      return this.http.get<Array<Operat>>(this.urlApp + 'operatProjekt',{params: params}
      );
    }
    getOperats(): Observable<Array<Operat>> {

      return this.http.get<Array<Operat>>(this.urlApp + 'operat' );
    }
    saveOperat(operat:Operat): Observable<Operat> {
      return this.http.post<Operat>(this.urlApp+'operat',operat);
    }

    updateOperat(operat:Operat): Observable<Operat> {
      const urlAppUpdate = this.urlApp + 'operatUpdate';
      return this.http.put<Operat>(urlAppUpdate,operat);
    }

    getOperatsByLayer(projektId:string,layer:string):Observable<Array<Operat>> {
    let params = new HttpParams();
    params = params.append('projektId', projektId);
    params = params.append('operatLayer', layer);
    return this.http.get<Array<Operat>>(this.urlApp + 'operat',{params: params});
    }
    getOperatsByKm(projektId:string,km:string):Observable<Array<Operat>> {
      let params = new HttpParams();
      params = params.append('projektId', projektId);
      params = params.append('km', km);
      return this.http.get<Array<Operat>>(this.urlApp + 'operatbykm',{params: params});
      }
    getOperatsInScope(projektId:string,fromKm:string,toKm:string):Observable<Array<Operat>>{
      let params = new HttpParams();
      params = params.append('projektId', projektId);
      params = params.append('odkm', fromKm);
      params = params.append('dokm', toKm);
      return this.http.get<Array<Operat>>(this.urlApp+'operatbetween', {params: params});
    }
   }

