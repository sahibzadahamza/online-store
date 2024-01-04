import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadermoduleRoutingModule } from './headermodule-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AboutusComponent
  ],
  imports: [
    CommonModule,
    HeadermoduleRoutingModule
  ]
})
export class HeadermoduleModule { }
