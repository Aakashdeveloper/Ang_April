import {Component} from '@angular/core';
import {ILogin} from './login.model';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent{

    myUser = new ILogin('','')

    constructor(private loginService: LoginService,
                private router: Router) {}


    submitForm(form:NgForm):void{
        console.log(form.value)
        this.loginService.login(form.value)
            .subscribe((res) => this.router.navigate(['/login']))
    }
}