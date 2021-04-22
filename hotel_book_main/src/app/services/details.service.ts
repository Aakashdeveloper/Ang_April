import {Injectable} from '@angular/core';
import {IHotel} from '../model/hotel.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class DetailsService {
    private url = "https://developerfunnel.herokuapp.com/hotelsdetails";

    constructor(private http: HttpClient){}

    getHotelDetails(id): Observable<IHotel[]>{
        return this.http.get<IHotel[]>(`${this.url}/${id}`)
    }
}