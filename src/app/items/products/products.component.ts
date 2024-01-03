import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedOption: string | undefined;

  constructor(private router: Router, private renderer: Renderer2) {
  }
  ngOnInit(): void {
  }
  gotodetails() {
    this.router.navigate(['categories/details'])
  }
 
  products = [
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'SINGLE VANILLA LIPPIE',
      img: '../../../assets/single.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },
    {
      name: 'VANILLA LIPPIES DISPLAY PACK',
      img: '../../../assets/displaypack.webp',
      para: 'Luxurious, High Shine, Hydrating Vanilla lip gloss. Giving you a polished look enhancing the natural colour of your lips.'
    },

  ]

}
