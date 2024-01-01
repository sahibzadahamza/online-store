import { Component, OnInit } from '@angular/core';
import { countries } from 'src/app/models/country-data-store';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit{
  public countries:any = countries


  constructor(){}
  ngOnInit(): void {
  }
  
}
