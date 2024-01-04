import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomercareRoutingModule } from './customercare-routing.module';
import { FaqComponent } from './faq/faq.component';
import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
  declarations: [
    FaqComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    CustomercareRoutingModule
  ]
})
export class CustomercareModule { }
