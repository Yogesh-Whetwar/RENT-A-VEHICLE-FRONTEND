import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  url:string="http://localhost:8080/users/getProfileIdByEmail";

  url2:string="http://localhost:8080/users/get"; 

  updateUrl:string="http://localhost:8080/users/update";
//check if user is logged in that case his email id willl be storesd in our systen so lets asssume that yogesh has logged in and using ngrx
//we have stored his email id in central place now we will search for yogesh using this considering email id as unique
constructor(private http:HttpClient){};

getProfileId(email:string):Observable<any>{  
  const params = new HttpParams().set('email',email );
  return this.http.get(this.url,{params});
}

getProfile(id:number):Observable<any>{  
  const params = new HttpParams().set('id',id );
  return this.http.get(this.url2,{params});
}  

updateProfile(user:any):Observable<any>{
  const newurl = `${this.updateUrl}/${user.id}`; // Append ID to the endpoint
  return this.http.put(newurl, user);
}

}
