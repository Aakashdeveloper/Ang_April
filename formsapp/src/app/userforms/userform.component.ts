import {Component} from '@angular/core';
import {IUser} from './userform.model';
import {NgForm} from '@angular/forms';
import {FormPosterService} from './userform.service';

@Component({
    selector: 'app-form',
    templateUrl: './userform.component.html'
})

export class UserComponent{
    hasCodeLangError = false;
    languages = ['Node','React','Angular','Go','Java']
    myEmployee = new IUser('John','','','','')

    constructor(private formPosterService: FormPosterService) {}

    firstToUpper(value): void{
        if(value.length>0){
            this.myEmployee.firstname = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        }else{
            this.myEmployee.firstname = value
        }
    }

    validateCodeLang(event):void{
        if(this.myEmployee.codelang === 'default'){
            this.hasCodeLangError= true
        }else{
            this.hasCodeLangError= false
        }
    }

    submitForm(form:NgForm):void{
        console.log(form.value)
        this.formPosterService.employForm(form.value)
        .subscribe((res) => console.log('Data Posted'))
    }
}