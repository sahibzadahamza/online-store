import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private router:Router, private cartService: CartService){}
  ngOnInit(): void {
    this.cartService.currentCartItemCount.subscribe(count => {
      this.cartItemCount = count;
    });
  }
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
