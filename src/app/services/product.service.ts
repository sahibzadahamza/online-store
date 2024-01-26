
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable,of,} from 'rxjs';
import { product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public apiUrl = environment.apiUrl
  productUrl = this.apiUrl +  '/Product'
  // reviewUrl = this.apiUrl + '/review'
  constructor(private http:HttpClient,) { }

  
  getProducts():Observable<product> {
    return this.http.get<product>(this.productUrl)
   }
   getProductById( id: string): Observable<product>{
     return this.http.get<product>(this.productUrl +'/'+ id )
   }
   getProductByCategory(id: string):Observable<product[]> {
    return this.http.get<product[]>(this.productUrl + '?categoryId=' + id);
  }

}
