import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadermoduleRoutingModule } from './headermodule-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AboutusComponent,
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    HeadermoduleRoutingModule
  ]
})
export class HeadermoduleModule { }
