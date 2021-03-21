import { Injectable } from '@angular/core';

const AUTH_API = 'https://localhost:8443/linear/';
//const AUTH_API = 'http://egsrv:8080/linear/';

@Injectable({
  providedIn: 'root'
})
export class PathService {

constructor() { }
urlApp = AUTH_API;

}
