import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'myTextUpper'
})

export class MyTextPipe implements PipeTransform{
    transform(value:string,kind:string){
        if(kind==='upper'){
            value = value.toUpperCase()
        }else{
            value = value.toLowerCase()
        }
        return value
    }
}