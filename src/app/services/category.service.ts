import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public apiUrl = environment.apiUrl
  categoryUrl = this.apiUrl + '/category';  
  constructor(private http:HttpClient,) { }

  
  getCategory():Observable<category> {
    return this.http.get<category>(this.categoryUrl)
   }
   getCategoryById(id: string): Observable<category>{
     return this.http.get<category>(this.categoryUrl +'/'+ id )
   }
}
