import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReturnsComponent } from './returns/returns.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path:'faq' , component:FaqComponent},
  {path:'shipping' , component:ShippingComponent},
  {path:'returns' , component:ReturnsComponent},
  {path:'privacy-policy' , component: PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomercareRoutingModule { }
