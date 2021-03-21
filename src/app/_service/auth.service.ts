import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service/user.service';
import { PathService } from './Path.service';

//const AUTH_API = 'https://localhost:8443/linear/';
//const AUTH_API = 'http://egsrv:8080/linear/';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient, private userservice: UserService, private pathService: PathService) { }
  getCurrentUser(username): Observable<any>{
    const options = {
      params: new HttpParams().set('username', username)
    };
    return this.http.get(this.pathService.urlApp + 'current', options);
  }

  login(credentials): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
   });
    return this.http.post(this.pathService.urlApp + 'login', {
      username: credentials.username,
      password: credentials.password
    }, { headers: httpHeaders,
      observe: 'response' });
  }

  register(user): Observable<any> {
    return this.http.post(this.pathService.urlApp + 'sign-up', {
     username: user.username,
     email: user.email,
     password: user.password,
     role: ['user']
    }, httpOptions);
  }
  sendToken(userdetails):Observable<any> {
    console.log(userdetails.usermail);
    
    return this.http.post(this.pathService.urlApp + 'settoken',
    userdetails.usermail,
      httpOptions
    );
  }
  resetpass(userdetails):Observable<any> {
    return this.http.post(this.pathService.urlApp + 'reset',{
      email: userdetails.usermail,
      token: userdetails.token,
      password: userdetails.password
    }, httpOptions);
  }
}
