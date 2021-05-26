import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../../services/authenticate.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user:User[];
  constructor(
    private authService:AuthenticateService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }


  getUser(){
    console.log('user')
    console.log(localStorage.getItem('userId'))
    this.authService.getUser(parseInt(localStorage.getItem('userId'))).subscribe((response:User[]) => {
      this.user = response;
      console.log(this.user)
    }, e => {
        
      console.log(`The error: `, e);
      
    });
  }
}
