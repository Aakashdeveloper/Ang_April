import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { IHotel } from '../model/hotel.model';
import {ListingService} from '../services/listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: number;
  userInput;
  hotels: IHotel[];
  myfiltername: string = "Room Type";
  roomTypeId;

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService
  ) { }

  ngOnInit(): void {

    console.log(this.route)
    this.id = this.route.snapshot.params['id'];
    sessionStorage.setItem('tripid',this.route.snapshot.params['id'])
    this.listingService.getHotelPerTrip(this.id)
        .subscribe((data) => this.hotels=data)
  }

  dataRecive(roomId: string){
    this.roomTypeId = roomId;
    console.log(this.hotels)
    //we can call api on the basis of roomId
  }

}

//this.name = this.route.snapshot.queryParams['name']