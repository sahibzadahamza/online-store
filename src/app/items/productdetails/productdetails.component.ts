import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  selectedProduct: any; // Type should match your product object

  productId: any;
  product: any; // Define your product type  
  visibleCards = 4; // Default value for screens larger than 500px
  currentIndex = 0;
  categories: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateVisibleCards();
  }
  constructor(private router: Router,  private productService: ProductService) { }

  ngOnInit(): void {
    this.updateVisibleCards();
   
   
  
 
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
