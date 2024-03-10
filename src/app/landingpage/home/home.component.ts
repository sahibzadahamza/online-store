import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  firstEightProducts: any[]=[];
  discount: any;
  price: any;
  categories: any[] =[];
  products: any[] = [];
  displayItemCount: number = 12;
  displayItemCount2: number = 3;
  currentIndex: number = 0;
  currentIndex2: number = 0;
  constructor(private router:Router, private productservice: ProductService, private cartservice: CartService, private categoryservice:CategoryService){}
  ngOnInit(): void {
    this.categoryservice.getCategory().subscribe((res:any)=>{
      this.categories = res
      console.log("these are categorueis in product" , res)
    })
    this.productservice.getProducts().subscribe(res=>{
      console.log("these are products", res)
    })
    this.productservice.getProducts().subscribe(res => {
      // Assuming the API response contains an array of products
      const products: any[] | any = res;
     // Shuffle the products array
     this.shuffleArray(products);

     // Get the first eight products
     this.firstEightProducts = products.slice(0, 12);

     console.log("These are the first eight products:", this.firstEightProducts);
  });
  this.updateDisplayItemCount();
  this.updateDisplayItemCount2()
  window.addEventListener('resize', () => this.updateDisplayItemCount());
  window.addEventListener('resize', () => this.updateDisplayItemCount2());
 
  }
  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  navigateToProduct(id: any) {
    this.router.navigate(['/categories/products', id]); // Assuming there is an 'id' property in your product object
  }
  gotodetails(_id:string){
    this.router.navigate(['categories/details/' + _id])
  }
  updateDisplayItemCount() {
    // Adjust displayItemCount based on screen size
    this.displayItemCount = window.innerWidth < 600 ? 3 : 12;
    this.currentIndex = 0;
  }

  updateDisplayItemCount2() {
    // Adjust displayItemCount based on screen size
    this.displayItemCount2 = window.innerWidth < 600 ? 1 : 3;
    this.currentIndex = 0;
  }

  showPrevButton(): boolean {
    return this.categories.length > this.displayItemCount && this.currentIndex > 0;
  }

  showNextButton(): boolean {
    return (
      this.categories.length > this.displayItemCount &&
      this.currentIndex < this.categories.length - this.displayItemCount
    );
  }
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.categories.length) % this.categories.length;

      // this.currentIndex -= (this.currentIndex + 1) % this.displayItemCount;

  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.categories.length;
      // this.currentIndex += this.displayItemCount;

  }
  showproductsofcategory(id : any){
    console.log("id" , id)
    this.productservice.getProductByCategory(id).subscribe((res:any)=>{
       console.log("selected category" , res)
       this.products = res
    })
  }

}
