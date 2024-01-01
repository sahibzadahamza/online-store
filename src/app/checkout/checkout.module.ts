import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';
import { CheckoutFullComponent } from './checkout-full/checkout-full.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CheckoutformComponent,
    CheckoutOrderComponent,
    CheckoutFullComponent,
    PaymentFormComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule
  ]
})
export class CheckoutModule { }
