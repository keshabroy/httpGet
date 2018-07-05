import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  viewUser(): void {
    this.route.navigate(["/home/user/" + 10]);
  }
}
