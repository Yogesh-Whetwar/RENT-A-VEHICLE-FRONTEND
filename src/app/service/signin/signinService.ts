import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
    
  private url="http://localhost:8080/users/create";

  constructor(private http: HttpClient) { } 

  createUser(user:any):Observable<any>{
    return this.http.post(this.url, user);
  }
}
