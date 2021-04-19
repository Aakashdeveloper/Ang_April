import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class FormPosterService {
    private url = "http://localhost:8900/employee";

    constructor(private http: HttpClient ) {}

    employForm(employee): Observable<any[]>{
        return this.http.post<any[]>(this.url,employee)
    }
}