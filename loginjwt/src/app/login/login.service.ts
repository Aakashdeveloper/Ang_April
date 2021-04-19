import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class LoginService {
    private url = "http://localhost:5000/api/auth/login";

    constructor(private http: HttpClient ) {}

    login(user): Observable<any[]>{
        return this.http.post<any[]>(this.url,user,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
    }
}