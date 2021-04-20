import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo;
  token;

  constructor(private loginService:LoginService,
              private router: Router ) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('TOKEN_NUMBER');
    this.loginService.getUserInfo(this.token)
    .subscribe((res) => this.userInfo = res)
  }

  logout():void{
    sessionStorage.removeItem('TOKEN_NUMBER');
    sessionStorage.removeItem('role');
    this.router.navigate(['/login'])
  }

}
