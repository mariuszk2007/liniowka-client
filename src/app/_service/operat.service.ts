import { Injectable } from '@angular/core';
import { Operat } from '../model/operat/operat/Operat';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { PathService } from 'src/app/_service/Path.service';

@Injectable({
  providedIn: 'root'
})
export class OperatService {

  operatElement: Array<Operat>;


  constructor(private http: HttpClient, private pathService: PathService) { }

  getOperat(projektId: string): Observable<Array<Operat>> {
    let params = new HttpParams();
    params = params.append('projektId', projektId);

    return this.http.get<Array<Operat>>(this.pathService.urlApp + 'operatProjekt', { params: params }
    );
  }
  getOperats(): Observable<Array<Operat>> {

    return this.http.get<Array<Operat>>(this.pathService.urlApp + 'operat');
  }
  saveOperat(operat: Operat): Observable<Operat> {
    return this.http.post<Operat>(this.pathService.urlApp + 'operat', operat);
  }

  updateOperat(operat: Operat): Observable<Operat> {
    const urlAppUpdate = this.pathService.urlApp + 'operatUpdate';
    return this.http.put<Operat>(urlAppUpdate, operat);
  }

  getOperatsByLayer(projektId: string, layer: string): Observable<Array<Operat>> {
    let params = new HttpParams();
    params = params.append('projektId', projektId);
    params = params.append('operatLayer', layer);
    return this.http.get<Array<Operat>>(this.pathService.urlApp + 'operat', { params: params });
  }
  getOperatsByKm(projektId: string, km: string): Observable<Array<Operat>> {
    let params = new HttpParams();
    params = params.append('projektId', projektId);
    params = params.append('km', km);
    return this.http.get<Array<Operat>>(this.pathService.urlApp + 'operatbykm', { params: params });
  }
  getOperatsInScope(projektId: string, fromKm: string, toKm: string): Observable<Array<Operat>> {
    let params = new HttpParams();
    params = params.append('projektId', projektId);
    params = params.append('odkm', fromKm);
    params = params.append('dokm', toKm);
    return this.http.get<Array<Operat>>(this.pathService.urlApp + 'operatbetween', { params: params });
  }
}

