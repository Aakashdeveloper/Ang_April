import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class BookingService {
    private url = "http://localhost:8900/bookings";

    constructor(private http: HttpClient ) {}

    placeBooking(details): Observable<any[]>{
        return this.http.post<any[]>(this.url,details,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
    }

    getBooking(uemail): Observable<any[]>{
        return this.http.get<any[]>(`${this.url}?email=${uemail}`)
    }
}