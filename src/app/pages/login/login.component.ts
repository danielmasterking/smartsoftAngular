import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInfo } from '../../models/login-info';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticateService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  submit() {
    const formValue = this.loginForm.value;
    
    let userInfo: LoginInfo = new LoginInfo(formValue.username, formValue.password);
    let loginStatus = this.authService.login(userInfo);
    loginStatus.subscribe((response) => {
      localStorage.setItem('token', response['token']);
      localStorage.setItem('userId', response['dataUser']['id']);
      console.log('id user')
      console.log(localStorage.getItem('userId'))
      this.router.navigate(['product']);
    }, e => {
        
      console.log(`The error: `, e.error.msg);
      alert(e.error.msg);
    });
  }

  

}
