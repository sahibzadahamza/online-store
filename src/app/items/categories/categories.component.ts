import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  constructor(private router: Router){
  }
  ngOnInit(): void {
  }
  gotoproducts(){
    this.router.navigate(['categories/products'])
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
