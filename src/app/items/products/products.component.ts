import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedOption: string | undefined;
  products: any[] = []
  constructor(private router: Router, private renderer: Renderer2, private productservice: ProductService) {
  }
  ngOnInit(): void {
    this.productservice.getProducts().subscribe((res: any) => {
      console.log("These are products", res);
      this.products = res
        .map((product: any) => {
          if (product.Product_pic) {
            return product;
          } else {
            return { ...product, Product_pic: '../../../assets/NoImage.jpeg' };
          }
        })
        .reverse(); 
    });
   
    
  }
  navigateToProductDetails(product: any) {
    this.router.navigate(['/categories/details', product._id]); // Assuming there is an 'id' property in your product object
  }
  // gotodetails() {
  //   this.router.navigate(['categories/details'])
  // }
  
 
 
  product = [
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      price: 5.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      price: 15.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      price: 10.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      price: 19.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      price: 8.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      price: 25.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      price: 30.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      price: 2.99,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      price: 12.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      price: 11.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      price: 13.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      price: 19.00,
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },

  ]

}
