import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class RegisterService {
    private url = "http://localhost:5000/api/auth/register";

    constructor(private http: HttpClient ) {}

    Register(user): Observable<any[]>{
        return this.http.post<any[]>(this.url,user,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
    }
}