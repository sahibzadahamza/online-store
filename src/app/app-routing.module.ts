import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landingpage/landingpage.module').then(m => m.LandingpageModule) },
  { path: 'categories', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'Checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
