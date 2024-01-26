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
  totalOfBill!: number;
  paymentHandler: any;
  cartItems:any[]=[];
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
    });
  }

  ngOnInit() {
    // Subscribe to cartData$ to get the data when the component is initialized
    this.cartService.cartData$.subscribe((data) => {
      this.checkoutData = data;
      this.cartItems=this.checkoutData?.cartItems
      console.log("this.checkoutData",this.checkoutData); // You can access the data here
    });
    this.invokeStripe();

  }
  makePayment() {
    // console.log('amount: ', amount);
    this.totalOfBill=this.checkoutData?.cartSubtotal + this.checkoutData?.shippingPrice
    console.log('this.totalOfBill: ', this.totalOfBill);
  
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51OU6zGCmmMR3QnqjFs5OAR5WalJaanq6CanhZAYrHhHj1FHHsFijNx9ZBL36U4z78EQi64JtYWmblIlZflsWaH3k00AkW504zW',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log("stripe token1 console:", stripeToken);
        paymentstripe(stripeToken);
      },
    });
    const paymentstripe = (stripeToken: any) => {
      console.log('stripeToken: ', stripeToken.id);
      const amountInDollars = this.totalOfBill;
      const amountInCents = Math.round(amountInDollars * 100);
      let data = {
        "amount": amountInCents,
        "currency": "usd",
        "source": stripeToken.id,
      }

      this.cartService.makePayments(data).subscribe((data: any) => {
        console.log('data: ', data);
        this.placeOrder()
      });
    };
    paymentHandler.open({
      name: 'BuyDelight4u',
      amount: this.totalOfBill * 100,
    
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51OU6zGCmmMR3QnqjFs5OAR5WalJaanq6CanhZAYrHhHj1FHHsFijNx9ZBL36U4z78EQi64JtYWmblIlZflsWaH3k00AkW504zW',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
  placeOrder() {
    // Log form values and other data{}
    console.log('Form Values:', this.checkoutForm?.value);
    console.log('Cart Items:', this.checkoutData?.cartItems);
    console.log('Cart Subtotal:', this.checkoutData?.cartSubtotal);
    console.log('Shipping Price:', this.checkoutData?.shippingPrice);
    this.totalOfBill=this.checkoutData?.cartSubtotal + this.checkoutData?.shippingPrice
    console.log('Total:', this.totalOfBill);
    let data={
      customerDetails:this.checkoutForm.value,
      cartItems: this.cartItems?.map((item:any)=>item._id),
      cartWithQty:this.cartItems,
      subTotal:this.checkoutData?.cartSubtotal,
      shippingPrice:this.checkoutData?.shippingPrice,
      status:'pending',
      Total:this.totalOfBill
    }
    console.log('data: ', data);
    this.cartService.saveOrder(data).subscribe({
      next:(order)=>{
        console.log('order: ', order);
      },
      error:(error)=>{
        console.log('error: ', error);
      }
    })
  }
 
 
}
