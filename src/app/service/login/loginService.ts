import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
     
  private url = 'http://localhost:8080/users/check';
  res:boolean=false;
  constructor(private http:HttpClient){}

checkUser(user: any): Observable<boolean> {  
  console
  return this.http.post<boolean>('http://localhost:8080/users/check', user, {
    headers: { 'Content-Type': 'application/json' }
  });
}


}
