import {Injectable} from '@angular/core';
import {IHotel} from '../model/hotel.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class ListingService {
    private url = "https://developerfunnel.herokuapp.com/hotellist";

    constructor(private http: HttpClient){}

    getHotelPerTrip(id): Observable<IHotel[]>{
        return this.http.get<IHotel[]>(`${this.url}/${id}`)
    }
}