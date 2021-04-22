import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './Home/home.component';
import {ListingComponent} from './listing/listing.component';
import { DetailsComponent } from './details/details.component';
import { BookingComponent } from './booking/booking.component'
import { LoginComponent } from './login/login.component';
import { DisplayBookingComponent } from './booking/displayBooking.component';

const routes: Routes = [
    {path:'listing/:id', component:ListingComponent},
    {path:'details/:id', component:DetailsComponent},
    {path:'home', component:HomeComponent},
    {path:'bookingForm/:name', component:BookingComponent},
    {path:'login', component:LoginComponent},
    {path:'showBooking',component:DisplayBookingComponent},
    {path:'', component:HomeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers:[],
    exports: [RouterModule]
})

export class AppRoutingModule {}