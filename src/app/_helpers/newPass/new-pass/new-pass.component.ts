import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent implements OnInit {

  form: any = {};
  errorMessage = '';
  @Input()
  newPassForm = false;
  isTokenFailed = false;

  constructor(private authService: AuthService,
      private router: Router) { }

  ngOnInit() {
    this.newPassForm = true;
  }

  onSubmit():void{
    this.authService.resetpass(this.form).subscribe;

  }
  sendToken():void{
    this.authService.sendToken(this.form).subscribe;
  }
  exit():void{
    this.newPassForm = !this.newPassForm;
    
  }

}
