import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  firstTwoProducts: any;
  
  constructor(private router:Router, private productservice: ProductService){}
  ngOnInit(): void {
    this.productservice.getProducts().subscribe(res=>{
      console.log("these are products", res)
    })
    this.productservice.getProducts().subscribe(res => {
      // Assuming the API response contains an array of products
      const products: any[] | any = res;
  
      // Get only the first two products
      this.firstTwoProducts = products.slice(222, 224);
  
      console.log("These are the first two products in home", this.firstTwoProducts);
  });
  
  }

  gotodetails(){
    this.router.navigate(['categories/details'])
  }


}
