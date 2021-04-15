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
import {AppRoutingModule} from './app-routing.module'

// decorator (meta data)
@NgModule({
    // All the modules will declare here
    imports:[
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
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
        ListingComponent
    ],
    // All services will declare here
    providers:[
        HomeService
    ],

    // only and only one component(first/main)
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {}