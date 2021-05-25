import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginInfo } from '../models/login-info';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }
  login(LoginInfo: LoginInfo){
    console.log(LoginInfo)
    let url:string = `${environment.ApiUrl}/auth`
    return this.http.post(url, LoginInfo);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
