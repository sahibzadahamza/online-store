import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  category:any[] | any

  categoryId: string | any;

  constructor(private router: Router,  private http:HttpClient, private categoryservice: CategoryService){
  }
  ngOnInit(): void {
    this.categoryservice.getCategory().subscribe((res: any) => {
      console.log("This is category", res);
      this.category = res.map((category: any) => {
        if (category.category_pic) {
          return category;
        } else {
          return { ...category, category_pic: '../../../assets/NoImage.jpeg' };
        }
      });
    });
    
  }
 
  gotoproducts(){
    this.router.navigate(['categories/products'])
  }

  products= [
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
