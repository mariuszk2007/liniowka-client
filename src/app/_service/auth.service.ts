import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) { }
  getCurrentUser(username): Observable<any>{
    const options = {
      params: new HttpParams().set('username', username)
    };
    return this.http.get(AUTH_API + 'current', options);
  }

  login(credentials): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
   });
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, { headers: httpHeaders,
      observe: 'response' });
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'sign-up', {
     username: user.username,
     email: user.email,
     password: user.password,
     role: ['user']
    }, httpOptions);
  }
  sendToken(userdetails):Observable<any> {
    throw this.http.post(AUTH_API + 'token',{
      email: userdetails.email},
      httpOptions
    );
  }
  resetpass(userdetails):Observable<any> {
    return this.http.post(AUTH_API + 'reset',{
      email: userdetails.email,
      token: userdetails.token,
      password: userdetails.password
    }, httpOptions);
  }
}
