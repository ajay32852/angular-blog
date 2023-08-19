import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl='http://localhost:9080/Blog/api/v1/';
  constructor(private http:HttpClient) { }

  getPost():Observable<any>
  {
   return  this.http.get(this.apiUrl+'post/list');
  }




}
