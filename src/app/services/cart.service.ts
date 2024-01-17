import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsChangedSubject: BehaviorSubject<void> = new BehaviorSubject<any>(null);
  cartItemsChanged = this.cartItemsChangedSubject.asObservable();


  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  addProduct(item: any) {
    this.cartItems.push(item);
    this.cartItemsChangedSubject.next();
  }
  updateCartItem(updatedItem: any): void {
    const index = this.cartItems.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.cartItems[index] = { ...this.cartItems[index], ...updatedItem };
    }
  }

  removeCartItem(item: any): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  increaseProductQuantity(item: any, quantity: number) {
    const index = this.cartItems.findIndex(cartItem => cartItem === item);
    if (index !== -1) {
      this.cartItems[index].quantity += quantity;
      this.cartItemsChangedSubject.next();
    }
  }

  productExists(item: any): boolean {
    return this.cartItems.some(cartItem => cartItem === item);
  }

  
 
  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

}
