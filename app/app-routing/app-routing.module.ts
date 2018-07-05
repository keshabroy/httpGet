import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ForgotComponent } from '../forgot/forgot.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { HomelayoutComponent } from '../home/homelayout/homelayout.component';
import { UserComponent } from '../home/user/user.component';
import { UsersComponent } from '../home/users/users.component';
import { AboutComponent } from '../home/about/about.component';
import { AuthguardService } from '../services/authguard.service';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "forgot", component: ForgotComponent },
  {
    path: "home", component: HomelayoutComponent, canActivate: [AuthguardService], 
    
    children: [
      { path: "user", component: UserComponent },
      { path: "user/:id", component: UserComponent },
      { path: "users", component: UsersComponent },
      { path: "about", component: AboutComponent },
      { path: "", component: UsersComponent }
    ]
  },
  { path: "", component: LoginComponent },
  { path: "**", component: NotfoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }


