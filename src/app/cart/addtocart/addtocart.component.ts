import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit{

  cartSubtotal: number = 0;
  total: number = 0; 
  shippingPrice: number = 17; 
  constructor(private router: Router, private cartService: CartService){}
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartItems.forEach(item => {
      item.subtotal = item.price;
    });
    this.calculateCartSubtotal();
    this.cartService.updateCartItemCount();

  }
  gotocheckout() {
    // Assuming you have a variable named 'cartItems', 'cartSubtotal', 'shippingPrice', and others
    const checkoutData = {
      cartItems: this.cartItems.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,  // Ensure 'quantity' is present in each item
        subtotal: item.subtotal
      })),
      cartSubtotal: this.cartSubtotal,
      shippingPrice: this.shippingPrice,
      // ... other data you want to send
    };

    // Set the cart data in the service
    this.cartService.setCartData(checkoutData);
    this.router.navigate(['Checkout'])

  }
 
  // gotocheckout(){
  //   this.router.navigate(['Checkout'])
  // }
  cartItems: any[] = [];
  calculateSubtotal(item: any): number {
    return (item.quantity || 1) * item.price;
  }

  updateItem(item: any): void {
    this.cartService.updateCartItem(item);
  }

  removeItem(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
        this.calculateCartSubtotal();
        this.updateTotal();
    }
  }
  
  updateTotal() {
    this.total = this.cartSubtotal + this.shippingPrice;
  }

  
  calculateCartSubtotal() {
      this.cartSubtotal = this.cartItems.reduce((subtotal, cartItem) => {
          return subtotal + parseFloat(cartItem.subtotal);
      }, 0);
  
      // Check if cartSubtotal exceeds 200
      if (this.cartSubtotal >= 200) {
          this.shippingPrice = 0;
      } else {
          this.shippingPrice = 17; // Reset to the original shipping price
      }
  }
  

  increment(item: any) {
    console.log('Before increment:', item.subtotal);
    if (!item.initialPrice) {
      item.initialPrice = item.price;
    }
    if (!item.quantity) {
      item.quantity = 2;
    } else {
      item.quantity += 1;
    }
    item.subtotal = (item.initialPrice * item.quantity).toFixed(2);
    this.calculateCartSubtotal();
    console.log('After increment:', item.subtotal);
  }
  
  decrement(item: any) {
    console.log('Before decrement:', item.subtotal);
    if (item.quantity > 1) {
      item.quantity--;
      item.subtotal = (item.initialPrice * item.quantity).toFixed(2);
      this.calculateCartSubtotal();
    }
    console.log('After decrement:', item.subtotal);
  }
  

  
}
