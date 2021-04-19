import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/userform.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "profile", component: ProfileComponent},
    {path: "admin", component: AdminComponent},
    {path: "", redirectTo:'register', pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers:[],
    exports: [RouterModule]
})

export class AppRoutingModule {}