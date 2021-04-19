import {Component} from '@angular/core';
import {IRegister} from './userform.model';
import {NgForm} from '@angular/forms';
import {RegisterService} from './userform.service';
import {Router} from '@angular/router'

@Component({
    selector: 'app-form',
    templateUrl: './userform.component.html'
})

export class RegisterComponent{

    myUser = new IRegister('John','','')

    constructor(private registerService: RegisterService,
                private router: Router) {}


    submitForm(form:NgForm):void{
        console.log(form.value)
        this.registerService.Register(form.value)
            .subscribe((res) => this.router.navigate(['/login']))
    }
}