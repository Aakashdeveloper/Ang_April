import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class LoginService {
    private url = "http://localhost:5000/api/auth/login";
    private userinfo = "http://localhost:5000/api/auth/userinfo";
    private gitProfile = "http://localhost:9900/oauth";

    constructor(private http: HttpClient ) {}

    login(user): Observable<any[]>{
        return this.http.post<any[]>(this.url,user,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
    }

    getUserInfo(token){
        sessionStorage.setItem('TOKEN_NUMBER',token)
        return this.http.get(this.userinfo,{headers:{'x-access-token':token}})
    }

    getGitProfile(code){
        let requestedData = {
            code:code
        }
        return this.http.post<any[]>(this.gitProfile,requestedData,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
    }
}