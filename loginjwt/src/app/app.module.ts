import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AdminPage } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { RegisterService } from './register/userform.service';
import { RegisterComponent } from './register/userform.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGaurdService } from './login-gaurd.service';
import { AdminGaurdService } from './admin-gaurd.service';
import { AdminPageService } from './admin/Admin.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminPage,
    ProfileComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    LoginService,
    LoginGaurdService,
    AdminGaurdService,
    AdminPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
