import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsChangedSubject: BehaviorSubject<void> = new BehaviorSubject<any>(null);
  cartItemsChanged = this.cartItemsChangedSubject.asObservable();
  private cartData = new BehaviorSubject<any>(null);
  cartData$ = this.cartData.asObservable();

  private cartItemCount = new BehaviorSubject<number>(0);
  currentCartItemCount = this.cartItemCount.asObservable();
  apiUrl: any=environment.apiUrl;
constructor(private http:HttpClient){}
  // Other methods to manage cart items...

  updateCartItemCount() {
    const itemCount = this.cartItems.length;
    this.cartItemCount.next(itemCount);
  }

  setCartData(data: any) {
    this.cartData.next(data);
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.updateCartItemCount();

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

  makePayments(stripeToken: any): Observable<any> {
    const url = `${this.apiUrl}/checkout`
    const body ={
      stripeToken,
    }
    return this.http.post<any>(url,body)
  }
  saveOrder(order: any) {
    return this.http.post(`${environment.apiUrl}/order`, order);
  }

  updateOrder(order: any) {
    return this.http.put(`${environment.apiUrl}/order/${order._id}`, order);
  }


}
