import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadermoduleRoutingModule } from './headermodule-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutusComponent,
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    HeadermoduleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeadermoduleModule { }
