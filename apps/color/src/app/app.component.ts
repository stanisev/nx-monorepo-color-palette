import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'color-palette-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('token');

    if( isLoggedIn != null || isLoggedIn != undefined) {
      this.loggedIn = true;
    } else {
      this.router.navigate(['/sign']);
    }
  }
}
