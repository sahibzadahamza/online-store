import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddtocartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule { }
