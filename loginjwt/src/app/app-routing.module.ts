import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/userform.component';
import {LoginComponent} from './login/login.component';
import {AdminPage} from './admin/admin.component';
import {ProfileComponent} from './profile/profile.component';
import { LoginGaurdService } from './login-gaurd.service'
import { AdminGaurdService } from './admin-gaurd.service';

const routes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "profile", component: ProfileComponent, canActivate:[LoginGaurdService]},
    {path: "admin", component: AdminPage, canActivate:[AdminGaurdService]},
    {path: "", redirectTo:'register', pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers:[
        LoginGaurdService,
        AdminGaurdService
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}