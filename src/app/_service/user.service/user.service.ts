import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

    getUserById(userId): Observable<any>{
      const options = {
        params: new HttpParams().set('userId', userId)
      };
      return this.http.get(AUTH_API + 'userId', options);
    }
  }

