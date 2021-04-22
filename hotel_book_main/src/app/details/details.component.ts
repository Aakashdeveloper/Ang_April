import { Component, OnInit } from '@angular/core';
import {DetailsService } from '../services/details.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any[];
  id;
  hotel_name;
  tripid = sessionStorage.getItem('tripid')?sessionStorage.getItem('tripid'):1

  constructor(
    private detailService: DetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id']
    this.detailService.getHotelDetails(this.id)
      .subscribe((data) => this.details = data)
  }


  onBack():void{
    this.router.navigate(['/listing',this.tripid])
  }

  placeBooking():void{
    sessionStorage.setItem('cost',this.details[0].cost)
    this.router.navigate(['/bookingForm',this.details[0].name])
  }

}
