import {Component} from '@angular/core';

@Component({
    selector:'app-search',
    templateUrl:'./Search.component.html',
    styleUrls:['./Search.component.css']
})

export class SearchComponent{
    title: String = 'Plan Your Trip With SimpliHotel';
    city: any[] = ['Delhi','Mumbai','Chandigarh','Pune']
    date = new Date()
}