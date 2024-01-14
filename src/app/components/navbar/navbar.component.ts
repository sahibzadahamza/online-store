import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){}

  gotohome(){
    this.router.navigate(['/'])
  }
  gotoaboutus(){
    this.router.navigate(['/main/about-us'])
  }
  gotocontactus(){
    this.router.navigate(['/main/contactus'])
  }
  gotoshop(){
    this.router.navigate(['/categories'])
  }
  gotocart(){
    this.router.navigate(['/cart'])
  }
}
