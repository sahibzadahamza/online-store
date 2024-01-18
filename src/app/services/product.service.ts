
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import {Observable,of,} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public apiUrl = environment.apiUrl
  productUrl = this.apiUrl +  '/Product'
  reviewUrl = this.apiUrl + '/review'
  constructor(private http:HttpClient,) { }

  
  getProducts():Observable<Product> {
    return this.http.get<Product>(this.productUrl)
   }
   getProductById( id: string): Observable<Product>{
     return this.http.get<Product>(this.productUrl +'/'+ id )
   }
   getProductByCategory(id: string):Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl + '?categoryId=' + id);
  }
}
