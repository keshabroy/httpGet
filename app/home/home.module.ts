import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, UserComponent, UsersComponent]
})
export class HomeModule { }
