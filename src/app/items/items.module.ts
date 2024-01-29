import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../models/filter.pipe';


@NgModule({
  declarations: [
    CategoriesComponent,
    ProductsComponent,
    ProductdetailsComponent,
    FilterPipe

  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
  ]
})
export class ItemsModule { }
