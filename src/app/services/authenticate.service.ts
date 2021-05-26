import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createUser(data) {
    let url:string = `${environment.ApiUrl}/users`
    return this.http.post(url, data);
  }

  getUser(id:number){
    let url:string = `${environment.ApiUrl}/users/${id}`
    return this.http.get(url, this.getHeaders());
  }

  private getHeaders(): Object {
    const headers = new HttpHeaders()
    .set(
      'token',
      localStorage.getItem('token')
    );
    const httpOptions = {
      headers
    };

    return httpOptions;
  }
}
