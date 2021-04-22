import {Component, OnInit} from '@angular/core';
import {HomeService} from '../services/home.service';
import {ITrip} from '../model/trip.model';

@Component({
    selector:'app-quicksearch',
    templateUrl:'./QuickSearch.component.html',
    styleUrls:['./QuickSearch.component.css']
})

export class QuickComponent implements OnInit{
    tripType: ITrip[];

    constructor(private homeService:HomeService) {}

    ngOnInit(): void{
        this.homeService.getTrip()
            .subscribe((data) =>  this.tripType=data)
    }
}