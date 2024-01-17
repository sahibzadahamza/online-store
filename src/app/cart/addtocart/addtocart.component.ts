import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit{
  constructor(private router: Router, private cartService: CartService){}
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();

  }
  gotocheckout(){
    this.router.navigate(['Checkout'])
  }
  cartItems: any[] = [];
  calculateSubtotal(item: any): number {
    return (item.quantity || 1) * item.price;
  }

  // Update quantity for a specific item
  updateItem(item: any): void {
    this.cartService.updateCartItem(item);
  }

  // Remove item from the cart
  removeItem(item: any): void {
    this.cartService.removeCartItem(item);
  }

  
}
