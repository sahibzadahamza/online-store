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
    // this.productservice.getProducts().subscribe((res:any)=>{
    //   console.log("these are products" , res);
    //   this.products = res
    // })
    this.productservice.getProducts().subscribe((res: any) => {
      console.log("These are products", res);
    
      // Assuming 'Product_pic' is the property representing the product picture
      this.products = res
        .map((product: any) => {
          // Check if the product has a 'Product_pic'
          if (product.Product_pic) {
            return product;
          } else {
            // If 'Product_pic' is not available, assign a default image URL
            // You can replace 'path_to_no_image_pic' with the path or URL of your default "no image" picture
            return { ...product, Product_pic: '../../../assets/NoImage.jpeg' };
          }
        })
        .reverse(); // Reverse the array to get products in reverse order
    });
    // this.productservice.getProducts().subscribe((res: any) => {
    //   const filteredProducts: any = [];
    //   res.map((i: any) => {
    //     if (i.userId && i.userId._id) {
    //       const businessId = '64df187b64341b22e1ebda87';
    //       if (businessId === String(i.userId._id)) {
    //         // Check if the product has a picture
    //         if (!i.Product_pic && i.Product_pic==null) {
    //           // If not, set a default or placeholder image URL
    //           i.Product_pic  ='../../../assets/NoImage.jpeg';
    //         }
    
    //         filteredProducts.push(i);
    //         filteredProducts.forEach((product: any) => {
    //           let reviewArray = product?.reviewId;
    //           let totalRating = 0;
    //           if (reviewArray && reviewArray.length > 0) {
    //             reviewArray.forEach((review: any) => {
    //               totalRating += review?.rating || 0;
    //             });
    //             const averageRating = totalRating / reviewArray.length;
    //             const percentageRating = (averageRating * 20);
    //             product.percentageRating = percentageRating.toFixed(1);
    //           } else {
    //             // Handle the case where there are no reviews
    //           }
    //         });
    //       }
    //     }
    //   });
    //   this.products = filteredProducts;
    //   console.log("this is product", this.products);
    // });
    
  }

  gotodetails() {
    this.router.navigate(['categories/details'])
  }
  
 
 
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
