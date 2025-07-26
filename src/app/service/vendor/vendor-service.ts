import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stat } from 'fs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {  

  private url = 'http://localhost:8080/vendor/getAllVendors';
  
  private changeStatusUrl='http://localhost:8080/vendor/changeStatus';
constructor(private http:HttpClient){}

getAllVendors():Observable<any>{
 return this.http.get(this.url);
}

changeStatus(email:string,status:string):Observable<any>{  
  console.log("vendor service to : ",status);
  return this.http.put(this.changeStatusUrl,{email,status});
}


}
