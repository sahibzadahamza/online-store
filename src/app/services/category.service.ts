import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public apiUrl = environment.apiUrl
  categoryUrl = this.apiUrl + '/category';  
  constructor(private http:HttpClient,) { }

  
  getCategory():Observable<Category> {
    return this.http.get<Category>(this.categoryUrl)
   }
   getCategoryById(id: string): Observable<Category>{
     return this.http.get<Category>(this.categoryUrl +'/'+ id )
   }
}
