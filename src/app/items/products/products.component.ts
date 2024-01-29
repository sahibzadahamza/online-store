import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayItemCount: number = 12;
  displayItemCount2: number = 3;
  currentIndex: number = 0;
  currentIndex2: number = 0;
  selectedOption: string | undefined;
  products: any[] = [];
  categories: any[] =[];
  searchTerm: string = '';
  filteredProducts: any[] = [];
  showproducts: boolean = true;
  constructor(private router: Router, private renderer: Renderer2, private productservice: ProductService, private route: ActivatedRoute, private categoryservice: CategoryService) {
  }
  ngOnInit(): void {
    


    this.updateDisplayItemCount();
    this.updateDisplayItemCount2()
    window.addEventListener('resize', () => this.updateDisplayItemCount());
    window.addEventListener('resize', () => this.updateDisplayItemCount2());
   
    this.route.params.subscribe(params => {
      const productId = params['id'];
      console.log('Product ID:', productId);

      // Use productId to fetch and display product details
      this.productservice.getProductByCategory(productId).subscribe((product: any) => { 
        console.log("this is get product by id",  product)
        this.products=product
      });
    });
 
    this.categoryservice.getCategory().subscribe((res:any)=>{
      this.categories = res
      console.log("these are categorueis in product" , res)
    })
    
  }
  
  navigateToProductDetails(id: any) {
    this.router.navigate(['/categories/details/'+ id]); // Assuming there is an 'id' property in your product object
  }
 

  // This method will be called when the search button is clicked
  search() {
    this.filteredProducts = this.products.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.showproducts = false

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
  // public doFilter=(value:string)=>{
  //   this.paymentListData.filter=value.trim().toLocaleLowerCase()
  // }
}
