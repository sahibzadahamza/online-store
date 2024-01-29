import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contact } from '../interfaces/contact';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getContact(): Observable<contact[]> {
    // let Userid:any =  this.securityService.getUserData()?._id;
    return this.http.get<contact[]>(`${this.apiUrl}/contact`);
  }

  //get One Category
  getContactbyId(id: string) {
    return this.http.get<contact>(this.apiUrl + '/contact/' + id);
  }
  //create Category
  createContact(contact: any) {
    return this.http.post(this.apiUrl + '/contact', contact);
  }
  //update Category
 
  //delete Category
  deleteContact(id: string) {
    return this.http.delete(this.apiUrl + '/contact/' + id);
  }
}
