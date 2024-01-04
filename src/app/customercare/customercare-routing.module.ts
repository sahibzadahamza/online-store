import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReturnsComponent } from './returns/returns.component';

const routes: Routes = [
  {path:'faq' , component:FaqComponent},
  {path:'shipping' , component:ShippingComponent},
  {path:'returns' , component:ReturnsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomercareRoutingModule { }
