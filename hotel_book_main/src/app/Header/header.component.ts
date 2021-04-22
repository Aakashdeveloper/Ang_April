import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
    token;

    constructor(private router:Router) {}

    ngOnInit(): void{
        this.token = sessionStorage.getItem('TOKEN_NUMBER')
    }

    logout(): void {
        sessionStorage.removeItem('TOKEN_NUMBER')
        sessionStorage.removeItem('uname')
        sessionStorage.removeItem('uemail');
        this.router.navigate(['/'])

    }
 }