import {Component, OnInit} from '@angular/core';
import {AdminPageService} from './Admin.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'./Admin.component.html'
})

export class AdminPage implements OnInit{
    allUser;

    constructor(private adminService:AdminPageService,
                private router:Router) {
            
                }
    
    ngOnInit(){
        this.adminService.allUser()
        .subscribe((res) => this.allUser = res);
    }
}