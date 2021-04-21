import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../login/login.service'

@Component({
  selector: 'app-profile',
  templateUrl: './gitProfile.component.html'
})
export class GitProfileComponent implements OnInit {
  userInfo;
  code;

  constructor(private loginService:LoginService,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.queryParams['code']
    console.log(this.code)
    this.loginService.getGitProfile(this.code)
      .subscribe((data) => this.userInfo=data)

    if(this.userInfo.email === "a"){

    }
  }

}
