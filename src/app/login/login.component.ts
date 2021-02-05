import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { TokenStorageService } from '../_service/token-storage.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  showNewPass = false;
  changePassButton = "Zmiana Hasła"

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      (data: HttpResponse<any>) => {

        this.tokenStorage.saveToken(data.headers.get('Authorization'));

        this.authService.getCurrentUser(this.form.username).subscribe(
          dataN => {

            this.tokenStorage.saveUser(dataN);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;

            this.reloadPage();
          });
      },

      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      });
  }

  showNewPassForm():void{
    this.showNewPass = !this.showNewPass;
    if(this.showNewPass){
    this.changePassButton = "Wyjdź"}
      else this.changePassButton="Zmiana Hasła"

  }
  reloadPage(): void {
    window.location.href = '../';
    
  }
}
