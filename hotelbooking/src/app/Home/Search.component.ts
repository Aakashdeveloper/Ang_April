import {Component, OnInit} from '@angular/core';
import { ICity } from '../model/location.model';
import {HomeService} from '../services/home.service';
import { IHotel } from '../model/hotel.model';

@Component({
    selector:'app-search',
    templateUrl:'./Search.component.html',
    styleUrls:['./Search.component.css']
})

export class SearchComponent implements OnInit{
    title: String = 'Plan Your Trip With SimpliHotel';
    location: ICity[];
    hotels: IHotel[]

    constructor(private homeService:HomeService){}

    ngOnInit(): void{
        this.homeService.getCity()
            .subscribe((data) => this.location =data)
    }

    citySelect(cityId){
        console.log(cityId)
        this.homeService.getHwrtC(cityId)
            .subscribe((data) => this.hotels = data)
    }
}