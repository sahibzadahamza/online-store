import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/models/country-data-store';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-full',
  templateUrl: './checkout-full.component.html',
  styleUrls: ['./checkout-full.component.css']
})
export class CheckoutFullComponent {
  public countries:any = countries
  checkoutData: any;
  checkoutForm: FormGroup;

  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      companyname: '',
      country: ['', Validators.required],
      address: ['', Validators.required],
      address2: '',
      town: ['', Validators.required],
      county: '',
      postcode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Subscribe to cartData$ to get the data when the component is initialized
    this.cartService.cartData$.subscribe((data) => {
      this.checkoutData = data;
      console.log(this.checkoutData); // You can access the data here
    });
  }

  placeOrder() {
    // Log form values and other data
    console.log('Form Values:', this.checkoutForm.value);
    console.log('Cart Items:', this.checkoutData.cartItems);
    console.log('Cart Subtotal:', this.checkoutData.cartSubtotal);
    console.log('Shipping Price:', this.checkoutData.shippingPrice);
    console.log('Total:', this.checkoutData.cartSubtotal + this.checkoutData.shippingPrice);
  }
 
 
}
