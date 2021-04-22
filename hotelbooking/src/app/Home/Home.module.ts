import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home.component';
import { QuickComponent } from './QuickSearch.component';
import { SearchComponent } from './Search.component';
import { HomeService } from '../services/home.service';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    declarations:[
        HomeComponent,
        QuickComponent,
        SearchComponent,
    ],
    providers:[
        HomeService,
    ],
    exports:[
        HomeComponent,
        QuickComponent,
        SearchComponent,
    ]
})

export class HomeModule{}