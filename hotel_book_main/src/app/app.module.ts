// This import is the main import
import {NgModule} from '@angular/core';
// To Display content on browser
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { QuickComponent } from './Home/QuickSearch.component';
import { SearchComponent } from './Home/Search.component';
import { MyTextPipe } from './Pipe/myUpper.pipe';
import {HttpClientModule} from '@angular/common/http';
import {HomeService} from './services/home.service';
import { ListingComponent } from './listing/listing.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { ListingService } from './services/listing.service';
import { HotelSearchPipe } from './Pipe/hotel.pipe';
import { RoomFilterComponent } from './filters/roomfilter.component';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './services/details.service';
import { BookingComponent } from './booking/booking.component';
import { BookingService } from './services/booking.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { DisplayBookingComponent } from './booking/displayBooking.component';

// decorator (meta data)
@NgModule({
    // All the modules will declare here
    imports:[
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
    ],
    // All Component and pipe
    declarations:[
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        QuickComponent,
        SearchComponent,
        MyTextPipe,
        ListingComponent,
        HotelSearchPipe,
        RoomFilterComponent,
        DetailsComponent,
        BookingComponent,
        LoginComponent,
        DisplayBookingComponent
    ],
    // All services will declare here
    providers:[
        HomeService,
        ListingService,
        DetailsService,
        BookingService,
        LoginService
    ],

    // only and only one component(first/main)
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {}