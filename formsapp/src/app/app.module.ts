import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './userforms/userform.component';
import { FormPosterService } from './userforms/userform.service';

@NgModule({
    declarations:[
        AppComponent,
        UserComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers:[
        FormPosterService
    ],
    bootstrap:[
        AppComponent
    ]
})


export class AppModule {}