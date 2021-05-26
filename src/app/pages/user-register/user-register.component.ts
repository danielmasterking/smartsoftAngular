import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  public registerForm: FormGroup;
  password:string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticateService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [ '', Validators.required ],
      firstname: [ '', Validators.required ],
      lastname: [ '', Validators.required ],
      password: [ '', Validators.required ],
      telefono: [ '', Validators.required ],
      identificacion: [ '', Validators.required ],
      direccion: [ '', Validators.required ]
    });
  }

  submit() {
    const formValue = this.registerForm.value;
    let password = this.registerForm.value.password;
    let passwordRepeat = document.getElementById("passwordRepeat").value;
    alert(password)
    alert(passwordRepeat)
    if(password != passwordRepeat) {
      alert('Las contraseñas no coinciden');
    }else if (this.registerForm.valid) {
      this.authService.createUser(formValue).subscribe((response) => {
        alert('Guardado con exito');
        localStorage.setItem('token', response['token']);
        localStorage.setItem('userId', response['dataUser']['id']);
        this.router.navigate(['product']);
      }, e => {
          
        console.log(`The error: `, e.error.msg);
        alert(e.error.msg);
        
      });
    }else {
      alert('Faltan datos');
    }
  }

}
