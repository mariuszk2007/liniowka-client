import { TableModule } from 'primeng/table';

import { OperatService } from './model/operat/operat/operat.service';
import { ProjektService } from './model/projekt/projekt.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatComponent } from './model/operat/operat/operat.component';
import { NewProjektComponent } from './model/projekt/new-projekt/new-projekt.component';
import { ProjektComponent } from './model/projekt/projekt/projekt.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewOperatComponent } from './model/operat/new-operat/new-operat.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { EditOperatComponent } from './model/operat/edit-operat/edit-operat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OperatComponent,
    NewProjektComponent,
    ProjektComponent,
    NewOperatComponent,
    EditOperatComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule,
    AvatarModule
  ],
  providers: [ProjektService, OperatService, authInterceptorProviders],
  bootstrap: [AppComponent],
  exports: [NewProjektComponent]
})
export class AppModule { }
