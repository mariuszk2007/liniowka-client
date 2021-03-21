import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PathService } from '../Path.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private pathService: PathService) {}
  urlApp = 'http://egsrv:8080/linear/';
    getUserById(userId): Observable<any>{
      const options = {
        params: new HttpParams().set('userId', userId)
      };
      console.log('user service');
      return this.http.get(this.pathService.urlApp + 'userId', options);
    }
  }

