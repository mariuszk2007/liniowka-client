import { Component, Output, EventEmitter, Input, OnInit, OnChanges } from '@angular/core';
import { TokenStorageService } from './_service/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title = 'Wykonane operaty';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;


  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {

      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }

  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['./']);
  }

  ngOnChanges():void{
    window.location.reload();
  }

}