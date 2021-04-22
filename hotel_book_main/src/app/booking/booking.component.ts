import {Component} from '@angular/core';
import {IBooking} from '../model/booking.model';
import {NgForm} from '@angular/forms';
import {BookingService} from '../services/booking.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './booking.component.html'
})

export class BookingComponent{

    hotelname;

    myBooking = new IBooking(Math.floor(Math.random()*10000),'',sessionStorage.getItem('uname'),sessionStorage.getItem('uemail'),sessionStorage.getItem('cost'))

    constructor(private bookingService: BookingService,
                private router: Router,
                private route: ActivatedRoute) {}


    ngOnInit(): void {
        this.hotelname  = this.route.snapshot.params['name']
    }
    submitForm(form:NgForm):void{
        console.log(form.value)
        this.bookingService.placeBooking(form.value)
            .subscribe((res) => console.log(res))
        this.router.navigate(['/showBooking'])
    }

}