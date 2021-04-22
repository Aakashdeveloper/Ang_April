import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { DetailsService } from '../services/details.service';
import { DetailsComponent } from './details.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    declarations:[
        DetailsComponent
    ],
    providers:[
        DetailsService
    ],
    exports:[
        DetailsComponent
    ]
})

export class DetailsModule{}