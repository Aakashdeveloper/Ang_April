import {Injectable} from '@angular/core';
import {ICity} from '../model/location.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHotel} from '../model/hotel.model';
import {ITrip} from '../model/trip.model';

@Injectable()

export class HomeService{
    private locationUrl = "https://developerfunnel.herokuapp.com/location";
    private hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city=";
    private tripUrl = "https://developerfunnel.herokuapp.com/booking"

    constructor(private http: HttpClient) {}

    getCity(): Observable<ICity[]>{
        return this.http.get<ICity[]>(this.locationUrl)
    }

    getHwrtC(cityId): Observable<IHotel[]> {
        return this.http.get<IHotel[]>(`${this.hotelUrl}${cityId}`)
    }

    getTrip(): Observable<ITrip[]>{
        return this.http.get<ITrip[]>(this.tripUrl)
    }
}