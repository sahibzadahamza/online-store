import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
  }
  gotocheckout(){
    this.router.navigate(['Checkout'])
  }

}
