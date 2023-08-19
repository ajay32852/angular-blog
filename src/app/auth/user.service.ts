import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private apiUrl='http://localhost:9080/Blog/api/v1';

  constructor(private http:HttpClient) { }
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl+'/register', userData);
  }
  
  loginUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl+'/login', userData);
  }
  createPost(postData: any): Observable<any> {
    const url = this.apiUrl+'/post/add-post';
    return this.http.post(url, postData);
  }

}
