import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { DetailsService } from '../services/details.service';
import { DetailsComponent } from './details.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        DetailsComponent,
        DetailsService
    ],
    exports:[]
})

export class DetailsModule{}