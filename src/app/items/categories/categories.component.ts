import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  category:any[] | any

  categoryId: string | any;

  constructor(private router: Router,  private http:HttpClient, private categoryservice: CategoryService, private route:ActivatedRoute){
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
  navigateToProduct(id: any) {
    this.router.navigate(['/categories/products', id]); // Assuming there is an 'id' property in your product object
  }

}
