import { Component, OnInit } from '@angular/core';
import {BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './displayBooking.component.html'
})
export class DisplayBookingComponent implements OnInit {
  details: any[];

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
  
    this.bookingService.getBooking(sessionStorage.getItem('uemail'))
      .subscribe((data) => this.details = data)
  }

}
