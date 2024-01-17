import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  selectedProduct: any; // Type should match your product object
  productdetail:any[] | any
  productId: any;
  product: any; // Define your product type  
  visibleCards = 4; // Default value for screens larger than 500px
  currentIndex = 0;
  categories: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateVisibleCards();
  }
  constructor(private router: Router,  private productService: ProductService, private route: ActivatedRoute, private cartservice: CartService) { }

  ngOnInit(): void {
    this.updateVisibleCards();
    this.route.params.subscribe(params => {
      const productId = params['_id'];
      console.log('Product ID:', productId);

      // Use productId to fetch and display product details
      this.productService.getProductById(productId).subscribe((product: any) => { 
        console.log("this is get product",  product)
        this.productdetail=product
      });
    });
   
  }
  
  addToCart(product: any) {
    this.cartservice.addToCart(product);
  
    // Display SweetAlert2 popup
    Swal.fire({
      icon: 'success',
      title: 'Product Added to Cart',
      text: `${product.name} has been added to your cart.`,
      showConfirmButton: false,
      timer: 1500  // Adjust the timer as needed
    });
  }
  
  
  currentproducts = [
    {
      img :'../../../assets/single.webp',
      name: "SINGLE VANILLA LIPPE"
    },
    {
      img :'../../../assets/displaypack.webp',
      name: "VANILLA LIPPIES DISPLAY PACK"
    },
    {
      img :'../../../assets/single.webp',
      name: "SINGLE VANILLA LIPPE"
    },
    {
      img :'../../../assets/displaypack.webp',
      name: "VANILLA LIPPIES DISPLAY PACK"
    },
    {
      img :'../../../assets/single.webp',
      name: "SINGLE VANILLA LIPPE"
    },
    {
      img :'../../../assets/displaypack.webp',
      name: "VANILLA LIPPIES DISPLAY PACK"
    },

  ]
  showCards(startIndex: number) {
    this.currentIndex = startIndex;
  }
  updateVisibleCards() {
    // Check the current window width
    const windowWidth = window.innerWidth;
    // Update visibleCards based on the screen width
    if (windowWidth < 500) {
      this.visibleCards = 1;
    } else {
      this.visibleCards = 4; // Show 4 cards on screens larger than 500px
    }
  }
  onPrevClick(event: Event) {
    event.preventDefault();
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }
  onNextClick(event: Event) {
    event.preventDefault();
    const lastIndex = this.currentproducts.length - 1;
    if (this.currentIndex < lastIndex) {
      this.currentIndex += 1;
    }
  }
}
